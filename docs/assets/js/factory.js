'use strict';

// Parent constructor
function CarMaker() {};
// A method of the parent
CarMaker.prototype.drive = function() {
    return 'I have ' + this.doors + ' doors';
};
// the static factory method
CarMaker.factory = function(type) {
    var constr = type,
        newCar;
    // error if the constructor doesn't exists
    if(typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + "doesn't exists"
        };
    }
    // inherit the parent but only once
    if(typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }
    // create new instance
    newCar = new CarMaker[constr]();
    return newCar;
}
//define specific car makers
CarMaker.Compact = function() {
    this.doors = 4;
}
CarMaker.Convertible = function() {
    this.doors = 2;
}
CarMaker.SUV = function() {
    this.doors = 24;
}

var corolla = CarMaker.factory('Compact');
var solstice = CarMaker.factory('Convertible');
var cherokee = CarMaker.factory('SUV');

document.getElementById("js-factory-corolla").innerHTML = corolla.drive(); // "I have 4 doors"
document.getElementById("js-factory-solstice").innerHTML = solstice.drive(); // "I have 2 doors"
document.getElementById("js-factory-cherokee").innerHTML = cherokee.drive(); // "I have 17 doors"
