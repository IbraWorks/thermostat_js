

$(document).ready(function () {
    let thermostat = new Thermostat();
    function updateTemp() {
        $('#temp').text(thermostat.temp)
    }
    updateTemp();

    $('#temp-up').on('click', function () {
        thermostat.up();
        updateTemp();
    });

    $('#temp-down').on('click', function(){
        thermostat.down();
        updateTemp();
    });
    $('#temp-reset').on('click', function(){
        thermostat.reset();
        updateTemp();
    });
    $('#power-saving-mode-on').on('click', function(){
        thermostat.turnPowerSavingModeOn();
        updateTemp();
    });
    $('#power-saving-mode-off').on('click', function(){
        thermostat.turnPowerSavingModeOff();
        updateTemp();
    });

});