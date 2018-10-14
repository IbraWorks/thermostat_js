

$(document).ready(function () {
    function displayWeather(city) {
        let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
        let token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
        let units = '&units=metric';
        $.get(url + token + units, function(data) {
          $('#current-temperature').text(data.main.temp);
        })
    }

    displayWeather('London');

    $('#select-city').submit(function(event) {
      event.preventDefault();
      let city = $('#current-city').val();
      displayWeather(city);
    })
    let thermostat = new Thermostat();
    function updateTemp() {
        $('#temp').text(thermostat.temp)
        $('#temp').attr('class', thermostat.energyUsageStatus());
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
        $('#power-saving-status').text("power saving mode is on")
        updateTemp();
    });
    $('#power-saving-mode-off').on('click', function(){
        thermostat.turnPowerSavingModeOff();
        $('#power-saving-status').text("power saving mode is off")
        updateTemp();
    });

});