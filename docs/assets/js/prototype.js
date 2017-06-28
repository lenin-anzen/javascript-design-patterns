'use strict';

let TeslaModelS = function() {
    this.numWheels = 4;
    this.manufacturer = 'Tesla';
    this.make = 'Model S';
};
TeslaModelS.prototype = function() {
    let go = function() {
        return 'Rotate wheels ' + this.numWheels;
    };
    let stop = function() {
        return 'Apply brake pads';
    };
    return {
        pressGasPedal: go,
        pressBrakePedal: stop,
    };
}();
let car = new TeslaModelS();

document.getElementById('js-prototype-first').innerHTML = car.numWheels;
document.getElementById('js-prototype-second').innerHTML = car.pressGasPedal();
document.getElementById('js-prototype-third').innerHTML = car.pressBrakePedal();
