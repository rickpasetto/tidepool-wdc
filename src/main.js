/*jshint -W079 */
/*jshint -W082 */
var module = module || {},
    window = window || {},
    jQuery = jQuery || {},
    tableau = tableau || {},
    wdcw = window.wdcw || {};

var COL_HEADERS = {
    SMBG_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Value', key: 'value', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Subtype', key: 'subType', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    CBG_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Value', key: 'value', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    BOLUS_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Subtype', key: 'subType', width: 10 },
        { header: 'Normal', key: 'normal', width: 10 },
        { header: 'Expected Normal', key: 'expectedNormal', width: 10 },
        { header: 'Extended', key: 'extended', width: 10 },
        { header: 'Expected Extended', key: 'expectedExtended', width: 10 },
        { header: 'Duration', key: 'duration', width: 10 },
        { header: 'Expected Duration', key: 'expectedDuration', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    BLOOD_KETONE_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Value', key: 'value', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    CGM_SETTINGS_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'High Alerts Enabled', key: 'highAlerts', width: 10},
        { header: 'High Alerts Level', key: 'highAlertsLevel', width: 10},
        { header: 'High Alerts Snooze', key: 'highAlertsSnooze', width: 10},
        { header: 'Low Alerts Enabled', key: 'lowAlerts', width: 10},
        { header: 'Low Alerts Level', key: 'lowAlertsLevel', width: 10},
        { header: 'Low Alerts Snooze', key: 'lowAlertsSnooze', width: 10},
        { header: 'Out of Range Alerts Enabled', key: 'outOfRangeAlerts', width: 10},
        { header: 'Out of Range Alerts Snooze', key: 'outOfRangeAlertsSnooze', width: 10},
        { header: 'Fall Rate Alerts Enabled', key: 'fallRateAlerts', width: 10},
        { header: 'Fall Rate Alerts Rate', key: 'fallRateAlertsRate', width: 10},
        { header: 'Rise Rate Alerts Enabled', key: 'riseRateAlerts', width: 10},
        { header: 'Rise Rate Alerts Rate', key: 'riseRateAlertsRate', width: 10},
        { header: 'Transmitter Id', key: 'transmitterId', width: 10},
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    BASAL_SCHEDULE_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Group', key: 'group', width: 10 },
        { header: 'Sequence', key: 'sequence', width: 10 },
        { header: 'Active Schedule', key: 'activeSchedule', width: 10 },
        { header: 'Schedule Name', key: 'scheduleName', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Rate', key: 'rate', width: 10 },
        { header: 'Start', key: 'start', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    BG_TARGET_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Group', key: 'group', width: 10 },
        { header: 'Sequence', key: 'sequence', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Low', key: 'low', width: 10 },
        { header: 'High', key: 'high', width: 10 },
        { header: 'Start', key: 'start', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    CARB_RATIO_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Group', key: 'group', width: 10 },
        { header: 'Sequence', key: 'sequence', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Amount', key: 'amount', width: 10 },
        { header: 'Start', key: 'start', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    INSULIN_SENSITIVITY_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Group', key: 'group', width: 10 },
        { header: 'Sequence', key: 'sequence', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Amount', key: 'amount', width: 10 },
        { header: 'Start', key: 'start', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    WIZARD_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'BG Input', key: 'bgInput', width: 10 },
        { header: 'BG Target', key: 'bgTarget', width: 10 },
        { header: 'BG Target Low', key: 'bgTargetLow', width: 10 },
        { header: 'BG Target High', key: 'bgTargetHigh', width: 10 },
        { header: 'BG Target Range', key: 'bgTargetRange', width: 10 },
        { header: 'Bolus Id', key: 'bolus', width: 10 },
        { header: 'Carb Input', key: 'carbInput', width: 10 },
        { header: 'Insulin Carb Ratio', key: 'insulinCarbRatio', width: 10 },
        { header: 'Insulin On Board', key: 'insulinOnBoard', width: 10 },
        { header: 'Insulin Sensitivity', key: 'insulinSensitivity', width: 10 },
        { header: 'Recommended Units for Carbs', key: 'recommendedCarb', width: 10 },
        { header: 'Recommended Units for Correction', key: 'recommendedCorrection', width: 10 },
        { header: 'Recommended Net Units', key: 'recommendedNet', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    UPLOAD_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Group', key: 'group', width: 10 },
        { header: 'Uploaded by User', key: 'byUser', width: 10 },
        { header: 'Hash Uploaded by User', key: 'hash_byUser', width: 10 },
        { header: 'Device Manufacturer', key: 'deviceManufacturer', width: 10 },
        { header: 'Device Model', key: 'deviceModel', width: 10 },
        { header: 'Device Serial Number', key: 'deviceSerialNumber', width: 10 },
        { header: 'Device Tag', key: 'deviceTag', width: 10 },
        { header: 'Computer Time', key: 'computerTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Time Processing', key: 'timeProcessing', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: 'Version', key: 'version', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    DEVICE_EVENT_COLS: [
        { header: 'Index', key: 'index', width: 10 },
        { header: 'Group', key: 'group', width: 10 },
        { header: 'Subtype', key: 'subType', width: 10 },
        { header: 'Alarm Type', key: 'alarmType', width: 10 },
        { header: 'Units', key: 'units', width: 10 },
        { header: 'Value', key: 'value', width: 10 },
        { header: 'Prime Target', key: 'primeTarget', width: 10 },
        { header: 'Volume', key: 'volume', width: 10 },
        { header: 'Time Change From', key: 'timeChangeFrom', width: 10 },
        { header: 'Time Change To', key: 'timeChangeTo', width: 10 },
        { header: 'Time Change Agent', key: 'timeChangeAgent', width: 10 },
        { header: 'Time Change Reasons', key: 'timeChangeReasons', width: 10 },
        { header: 'Time Change Timezone', key: 'timeChangeTimezone', width: 10 },
        { header: 'Status', key: 'status', width: 10 },
        { header: 'Duration', key: 'duration', width: 10 },
        { header: 'Expected Duration', key: 'expectedDuration', width: 10 },
        { header: 'Reason Suspended', key: 'reasonSuspended', width: 10 },
        { header: 'Reason Resumed', key: 'reasonResumed', width: 10 },
        { header: 'Source', key: 'source', width: 10 },
        { header: 'Device Id', key: 'deviceId', width: 10 },
        { header: 'Device Time', key: 'deviceTime', width: 10 },
        { header: 'Time', key: 'time', width: 10 },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10 },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10 },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10 },
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Created Time', key: 'createdTime', width: 10 },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10 },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10 },
        { header: 'Payload', key: 'payload', width: 10 },
        { header: 'GUID', key: 'guid', width: 10 },
        { header: null, key: 'uploadId', width: 10 },
        { header: null, key: '_groupId', width: 10 }
    ],

    BASAL_COLS: [
        { header: 'Index', key: 'index', width: 10, type: 'int' },
        { header: 'Group', key: 'group', width: 10, type: 'int' },
        { header: 'Suppressed', key: 'suppressed', width: 10, type: 'bool' },
        { header: 'Delivery Type', key: 'deliveryType', width: 10, type: 'string' },
        { header: 'Duration', key: 'duration', width: 10, type: 'int' },
        { header: 'Expected Duration', key: 'expectedDuration', width: 10, type: 'int' },
        { header: 'Percent', key: 'percent', width: 10, type: 'float' },
        { header: 'Rate', key: 'rate', width: 10, type: 'float' },
        { header: 'Units', key: 'units', width: 10, type: 'string' },
        { header: 'Schedule Name', key: 'scheduleName', width: 10, type: 'string' },
        { header: 'Source', key: 'source', width: 10, type: 'string' },
        { header: 'Device Id', key: 'deviceId', width: 10, type: 'string' },
        { header: 'Device Time', key: 'deviceTime', width: 10, type: 'datetime' },
        { header: 'Time', key: 'time', width: 10, type: 'datetime' },
        { header: 'Timezone Offset', key: 'timezoneOffset', width: 10, type: 'int' },
        { header: 'Clock Drift Offset', key: 'clockDriftOffset', width: 10, type: 'int' },
        { header: 'Conversion Offset', key: 'conversionOffset', width: 10, type: 'int' },
        { header: 'Id', key: 'id', width: 10, type: 'string' },
        { header: 'Created Time', key: 'createdTime', width: 10, type: 'datetime' },
        { header: 'Hash Upload Id', key: 'hash_uploadId', width: 10, type: 'string' },
        { header: 'Hash Group Id', key: 'hash_groupId', width: 10, type: 'string' },
        { header: 'Payload', key: 'payload', width: 10, type: 'string' },
        { header: 'GUID', key: 'guid', width: 10, type: 'string' },
        { header: null, key: 'uploadId', width: 10, type: 'string' },
        { header: null, key: '_groupId', width: 10, type: 'string' }
    ]
};

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

	/**
	 * Primary method called when Tableau is asking for the column headers that
	 * this web data connector provides. Takes a single callable argument that you
	 * should call with the headers you've retrieved.
	 *
	 * @param {function(Array<{name, type, incrementalRefresh}>)} registerHeaders
	 *   A callback function that takes an array of objects as its sole argument.
	 *   For example, you might call the callback in the following way:
	 *   registerHeaders([
	 *     {name: 'Boolean Column', type: 'bool'},
	 *     {name: 'Date Column', type: 'date'},
	 *     {name: 'DateTime Column', type: 'datetime'},
	 *     {name: 'Float Column', type: 'float'},
	 *     {name: 'Integer Column', type: 'int'},
	 *     {name: 'String Column', type: 'string'}
	 *   ]);
	 *
	 *   Note: to enable support for incremental extract refreshing, add a third
	 *   key (incrementalRefresh) to the header object. Candidate columns for
	 *   incremental refreshes must be of type datetime or integer. During an
	 *   incremental refresh attempt, the most recent value for the given column
	 *   will be passed as "lastRecord" to the tableData method. For example:
	 *   registerHeaders([
	 *     {name: 'DateTime Column', type: 'datetime', incrementalRefresh: true}
	 *   ]);
	 */
	wdcw.columnHeaders = function columnHeaders(registerHeaders) {
		// // Do the same to retrieve your actual data.
		// $.ajax({
		//   url: buildApiFrom('path/to/your/metadata'),
		//   // Add basic authentication headers to your request like this. Note that
		//   // the password is encrypted when stored by Tableau; the username is not.
		//   headers: {
		//     Authorization: 'Basic ' + btoa(this.getUsername() + ':' + this.getPassword())
		//   },
		//   success: function dataRetrieved(response) {
		//     var processedColumns = [],
		//         propName;

		//     // If necessary, process the response from the API into the expected
		//     // format (highlighted below):
		//     for (propName in response.properties) {
		//       if (response.properties.hasOwnProperty(propName)) {
		//         processedColumns.push({
		//           name: propName,
		//           type: response.properties[propName].type,
		//           // If your connector supports incremental extract refreshes, you
		//           // can indicate the column to use for refreshing like this:
		//           incrementalRefresh: propName === 'entityId'
		//         });
		//       }
		//     }

		//     // Once data is retrieved and processed, call registerHeaders().
		//     registerHeaders(processedColumns);
		//   },
		//   // Use this.ajaxErrorHandler for basic error handling.
		//   error: this.ajaxErrorHandler
		// });

		// TODO: Only supports Basals for now
		if (this.getConnectionData()['DataType'] === 'basal') {
			var headers = [];
			COL_HEADERS.BASAL_COLS.forEach(function shapeData(item) {
				headers.push({
					//				  name: item.header,
					name: item.key,
					type: item.type
				});
			});
			registerHeaders(headers);
			// registerHeaders([
			// 	  { name: 'Index', type: 'int'},
			// 	  { name: 'Group', type: 'int'},
			// 	  { name: 'Suppressed', type: 'bool'},
			// 	  { name: 'Delivery Type', type: 'string'},
			// 	  { name: 'Duration', type: 'int'},
			// 	  { name: 'Expected Duration', type: 'int'},
			// 	  { name: 'Percent', type: 'float'},
			// 	  { name: 'Rate', type: 'float'},
			// 	  { name: 'Units', type: 'string'},
			// 	  { name: 'Schedule Name', type: 'string'},
			// 	  { name: 'Source', type: 'string'},
			// 	  { name: 'Device Id', type: 'string'},
			// 	  { name: 'Device Time', type: 'datetime'},
			// 	  { name: 'Time', type: 'datetime'},
			// 	  { name: 'Timezone Offset', type: 'int'},
			// 	  { name: 'Clock Drift Offset', type: 'int'},
			// 	  { name: 'Conversion Offset', type: 'int'},
			// 	  { name: 'Id', type: 'string'},
			// 	  { name: 'Created Time', type: 'datetime'},
			// 	  { name: 'Hash Upload Id', type: 'string'},
			// 	  { name: 'Hash Group Id', type: 'string'},
			// 	  { name: 'Payload', type: 'string'},
			// 	  { name: 'GUID', type: 'string'},
			// 	  { name: 'uploadId', type: 'string'},
			// 	  { name: '_groupId', type: 'string'}
			// ]);
		}
	};


	/**
	 * Primary method called when Tableau is asking for your web data connector's
	 * data. Takes a callable argument that you should call with all of the
	 * data you've retrieved. You may optionally pass a token as a second argument
	 * to support paged/chunked data retrieval.
	 *
	 * @param {function(Array<{object}>, {string})} registerData
	 *   A callback function that takes an array of objects as its sole argument.
	 *   Each object should be a simple key/value map of column name to column
	 *   value. For example, you might call the callback in the following way:
	 *   registerData([
	 *     {'String Column': 'String Column Value', 'Integer Column': 123}
	 *   ]});
	 *
	 *   It's possible that the API you're interacting with supports some mechanism
	 *   for paging or filtering. To simplify the process of making several paged
	 *   calls to your API, you may optionally pass a second argument in your call
	 *   to the registerData callback. This argument should be a string token that
	 *   represents the last record you retrieved.
	 *
	 *   If provided, your implementation of the tableData method will be called
	 *   again, this time with the token you provide here. Once all data has been
	 *   retrieved, pass null, false, 0, or an empty string.
	 *
	 * @param {string} lastRecord
	 *   Optional. If you indicate in the call to registerData that more data is
	 *   available (by passing a token representing the last record retrieved),
	 *   then the lastRecord argument will be populated with the token that you
	 *   provided. Use this to update/modify the API call you make to handle
	 *   pagination or filtering.
	 *
	 *   If you indicated a column in wdcw.columnHeaders suitable for use during
	 *   an incremental extract refresh, the last value of the given column will
	 *   be passed as the value of lastRecord when an incremental refresh is
	 *   triggered.
	 */
	wdcw.tableData = function tableData(registerData, lastRecord) {
		// TODO: Only supports Basals for now
		if (this.getConnectionData()['DataType'] === 'basal') {

			var dataType = this.getConnectionData()['DataType'];
			var username = this.getUsername();
			var password = this.getPassword();
			var email = this.getConnectionData()['email'].trim();
			var env = ''; // production env
			// Login
			var url = 'https://' + env + 'api.tidepool.org/auth/login';
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
					getData(sessionToken, email, dataType, registerData);

				},
				error: this.ajaxErrorHandler
			});

		}

	};

	// You can write private methods for use above like this:

	function getData(sessionToken, email, dataType, registerData) {
		var reqBody = 'METAQUERY WHERE emails CONTAINS ' + email
			+ ' QUERY TYPE IN ';
		if (dataType) {
			reqBody += dataType;
		} else {
			reqBody += 'basal, bolus, cbg, cgmSettings, deviceEvent, ' +
				'deviceMeta, pumpSettings, settings, smbg, '+
				'upload, wizard';
		}
		console.log('getting data ' + reqBody);
        var start_time = new Date().getTime();
		$.ajax({
		  	type: 'POST',
		  	url: buildApiFrom('/query/data'/*, {last: lastRecord}*/),
			data: reqBody,
		  	headers: {
		  		'x-tidepool-session-token': sessionToken,
		  		'Content-Type': 'application/json'
		  		//Authorization: 'Basic ' + btoa(this.getUsername() + ':' + this.getPassword())
		  	},
			dataType: 'json',
		  	success: function dataRetrieved(response) {
				console.log('Processing response');
		  		// var processedData = [],
		  		// 	  // Determine if more data is available via paging.
		  		// 	  moreData = response.meta.page < response.meta.pages;

		  		// You may need to perform processing to shape the data into an array of
		  		// objects where each object is a map of column names to values.
		  		// response.entities.forEach(function shapeData(entity) {
		  		// 	  processedData.push({
		  		// 		  column1: entity.columnOneValue,
		  		// 		  column2: entity.columnTwoValue
		  		// 	  });
		  		// });

                var request_time = new Date().getTime() - start_time;
				//console.log('got response: ' + response);
                console.log('GOT RESPONSE: took ' + request_time + 'ms');

		  		var processedData = response;

		  		// Once you've retrieved your data and shaped it into the form expected,
		  		// call the registerData function. If more data can be retrieved, then
		  		// supply a token to inform further paged requests.
		  		// @see buildApiFrom()
		  		// if (moreData) {
		  		// 	  registerData(processedData, response.meta.page);
		  		// }
		  		// // Otherwise, just register the response data with the callback.
		  		// else {
		  		registerData(processedData);
		  		// }
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
		path = 'https://api.tidepool.org' + path;

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
