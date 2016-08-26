/*jshint -W079 */
/*jshint -W082 */
var module = module || {},
    window = window || {},
    jQuery = jQuery || {},
    tableau = tableau || {},
    wdcw = window.wdcw || {};

var TIDEPOOL_ENV = ''; // XXX PRODUCTION!!??!!
var TIDEPOOL_URL = 'https://' + TIDEPOOL_ENV + 'api.tidepool.org';

module.exports = function($, tableau, wdcw) {

	/**
	 * Run during initialization of the web data connector.
	 *
	 * @param {string} phase
	 *   The initialization phase. This can be one of:
	 *   - tableau.phaseEnum.interactivePhase: Indicates when the connector is
	 *     being initialized with a user interface suitable for an end-user to
	 *     enter connection configuration details.
	 *   - tableau.phaseEnum.gatherDataPhase: Indicates when the connector is
	 *     being initialized in the background for the sole purpose of collecting
	 *     data.
	 *   - tableau.phaseEnum.authPhase: Indicates when the connector is being
	 *     accessed in a stripped down context for the sole purpose of refreshing
	 *     an OAuth authentication token.
	 * @param {function} setUpComplete
	 *   A callback function that you must call when all setup tasks have been
	 *   performed.
	 */
	wdcw.setup = function setup(phase, setUpComplete) {
		// You may need to perform set up or other initialization tasks at various
		// points in the data connector flow. You can do so here.
		switch (phase) {
		case tableau.phaseEnum.interactivePhase:
			// Perform set up tasks that relate to when the user will be prompted to
			// enter information interactively.
			break;

		case tableau.phaseEnum.gatherDataPhase:
			// Perform set up tasks that should happen when Tableau is attempting to
			// retrieve data from your connector (the user is not prompted for any
			// information in this phase.
			break;

		case tableau.phaseEnum.authPhase:
			// Perform set up tasks that should happen when Tableau is attempting to
			// refresh OAuth authentication tokens.
			break;
		}

		// Always register when initialization tasks are complete by calling this.
		// This can be especially useful when initialization tasks are asynchronous
		// in nature.
		setUpComplete();
	};

	/**
	 * Run when the web data connector is being unloaded. Useful if you need
	 * custom logic to clean up resources or perform other shutdown tasks.
	 *
	 * @param {function} tearDownComplete
	 *   A callback function that you must call when all shutdown tasks have been
	 *   performed.
	 */
	wdcw.teardown = function teardown(tearDownComplete) {
		// Once shutdown tasks are complete, call this. Particularly useful if your
		// clean-up tasks are asynchronous in nature.
		tearDownComplete();
	};

	wdcw.schema = function schema(registerSchemaCallback) {
		registerSchemaCallback(TABLE_INFO);
	};

	wdcw.tableData = function tableData(table, doneCallback) {
		var username = this.getUsername();
		var password = this.getPassword();
		var email = this.getConnectionData()['email'].trim();
		var env = ''; // XXX production env!!
		// Login
		var url = buildApiFrom('/auth/login')
 		console.log('Logging in with ' + url);
		$.ajax({
			type: 'POST',
			url: url,
			beforeSend: function (xhr) {
				xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
			},
			success: function(data, textStatus, request){
		  		var sessionToken = request.getResponseHeader('x-tidepool-session-token')

				console.log('Logged in.');

				getDataForTable(sessionToken, email, table, doneCallback);
			},
			error: this.ajaxErrorHandler
		});
	};

	// You can write private methods for use above like this:

	function getDataForTable(sessionToken, email, table, doneCallback) {
		var reqBody = 'METAQUERY WHERE emails CONTAINS ' + email
			+ ' QUERY TYPE IN ';

		// The table id better be right here! --me
		reqBody += table.tableInfo.id;
		
		console.log('getting data ' + reqBody);
        var start_time = new Date().getTime();
		$.ajax({
		  	type: 'POST',
		  	url: buildApiFrom('/query/data'),
			data: reqBody,
		  	headers: {
		  		'x-tidepool-session-token': sessionToken,
		  		'Content-Type': 'application/json'
		  		//Authorization: 'Basic ' + btoa(this.getUsername() + ':' + this.getPassword())
		  	},
			dataType: 'json',
		  	success: function dataRetrieved(response) {
				console.log('Processing response');

                var request_time = new Date().getTime() - start_time;

                console.log('GOT RESPONSE (' + (response + '').length + ') bytes : took ' + request_time + 'ms');

				// TODO: is response in exactly the form we want, or do we need to
				// shape/swizzle it? 
		  		var processedData = response;

		  		table.appendRows(processedData);

                console.log('DONE');
				doneCallback();
		  	},
		  	// Use this.ajaxErrorHandler for basic error handling.
		  	error: this.ajaxErrorHandler
		});
	}

	/**
	 * Helper function to build an API endpoint.
	 *
	 * @param {string} path
	 *   API endpoint path from which to build a full URL.
	 *
	 * @param {object} opts
	 *   Options to inform query parameters and paging.
	 */
	function buildApiFrom(path, opts) {
		opts = opts || {};
		path = TIDEPOOL_URL + path;

		// If opts.last was passed, build the URL so the next page is returned.
		if (opts.last) {
			path += '?page=' + opts.last + 1;
		}

		return path;
	}


	// Polyfill for btoa() in older browsers.
	// @see https://raw.githubusercontent.com/davidchambers/Base64.js/master/base64.js
	/* jshint ignore:start */
	if (typeof btoa === 'undefined') {
		function btoa(input) {
			var object = typeof exports != 'undefined' ? exports : this, // #8: web workers
				chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
				str = String(input);

			function InvalidCharacterError(message) {
				this.message = message;
			}
			InvalidCharacterError.prototype = new Error;
			InvalidCharacterError.prototype.name = 'InvalidCharacterError';

			for (
				// initialize result and counter
				var block, charCode, idx = 0, map = chars, output = '';
				// if the next str index does not exist:
				//   change the mapping table to "="
				//   check if d has no fractional digits
				str.charAt(idx | 0) || (map = '=', idx % 1);
				// "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
				output += map.charAt(63 & block >> 8 - idx % 1 * 8)
			) {
				charCode = str.charCodeAt(idx += 3 / 4);
				if (charCode > 0xFF) {
					throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
				}
				block = block << 8 | charCode;
			}
			return output;
		}
	}
	/* jshint ignore:end */

	return wdcw;
};

// Set the global wdcw variable as expected.
wdcw = module.exports(jQuery, tableau, wdcw);
