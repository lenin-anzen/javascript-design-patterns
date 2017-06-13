'use strict';

var TeslaModelS = function() {
    this.numWheels    = 4;
    this.manufacturer = 'Tesla';
    this.make         = 'Model S';
}
TeslaModelS.prototype = function() {
    var go = function() {
        return 'Rotate wheels ' + this.numWheels;
    };
    var stop = function() {
        return 'Apply brake pads';
    };
    return {
        pressGasPedal: go,
        pressBrakePedal: stop
    }
}();
var car = new TeslaModelS();

document.getElementById("js-prototype-first").innerHTML = car.numWheels;
document.getElementById("js-prototype-second").innerHTML = car.pressGasPedal();
document.getElementById("js-prototype-third").innerHTML = car.pressBrakePedal();
