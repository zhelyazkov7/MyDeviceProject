document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    window.addEventListener("batterystatus", onBatteryStatus, false);

    applyDeviceData();
    checkConnection();
    
    navigator.geolocation.watchPosition(geolocationSuccess, geolocationError);
}

function applyDeviceData() {
    $("#cordovaVersion").text(device.cordova);
    $("#manufacturer").text(device.manufacturer);
    $("#isVirtual").text(device.isVirtual);
    $("#deviceModel").text(device.model);

    $("#operatingSystem").text(device.platform);
    $("#osVersion").text(device.version);
    $("#uuid").text(device.uuid);
    $("#serial").text(device.serial);
}

function onBatteryStatus(status) {
    $("#batteryStatus").text(status.level);
    $("#isPlugged").text(status.isPlugged);
}

function checkConnection() {
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    $("#connectionType").text(states[networkState]);
}

function geolocationSuccess(position) {
    $('#latitude').text(position.coords.latitude);
    $('#longitude').text(position.coords.longitude);
    $('#altitude').text(position.coords.altitude);
    $('#accuracy').text(position.coords.accuracy);
    $('#altitudeAccuracy').text(position.coords.altitudeAccuracy);
}

function geolocationError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
