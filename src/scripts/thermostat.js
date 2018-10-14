'use strict';
function Thermostat() {
	this.temp = 20;
	this.MINIMUM_TEMP = 10;
	this.MAXIMUM_TEMP = 32;
	this.powerSavingModeOn = true;
	this.maxPowerSavingModeTemp = 25;
}

Thermostat.prototype.up = function () {
	if (this.powerSavingModeOn && this.temp >= this.maxPowerSavingModeTemp) {
		throw new Error(`Power saving mode is On, Cannot increase above ${this.maxPowerSavingModeTemp} degrees`)
	} else if (this.temp >= this.MAXIMUM_TEMP){
		throw new Error(`Power saving mode is Off, Cannot increase above ${this.MAXIMUM_TEMP} degrees`)
	} else {
		this.temp += 1;
	}
}

Thermostat.prototype.down = function () {
	if(this.isMinimumTemp()){
		throw new Error(`Cannot decrease temp below ${this.MINIMUM_TEMP} degrees`);
	} else {
		this.temp -= 1;
	}  
}

Thermostat.prototype.reset = function () {
  this.temp = 20;
}

Thermostat.prototype.energyUsageStatus = function () {
	if(this.temp < 18) {
		return 'low-energy-usage';
	} else if (this.temp >= 18 && this.temp < 25) {
		return 'medium-energy-usage';
	} else {
		return 'high-energy-usage';
	}
}

Thermostat.prototype.isMinimumTemp = function() {
	return this.temp === this.MINIMUM_TEMP;  
}
Thermostat.prototype.isMaximumTemp = function() {
	return this.temp === this.MAXIMUM_TEMP;  
}

Thermostat.prototype.turnPowerSavingModeOn = function () {
	this.powerSavingModeOn = true;
	if (this.temp > this.maxPowerSavingModeTemp) {
		this.temp = this.maxPowerSavingModeTemp;
	}
}

Thermostat.prototype.turnPowerSavingModeOff = function () {
	this.powerSavingModeOn = false;
}