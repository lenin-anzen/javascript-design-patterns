'use strict';

// Parent constructor
function CarMaker() {};
// A method of the parent
CarMaker.prototype.drive = function() {
    return 'I have ' + this.doors + ' doors';
};
// the static factory method
CarMaker.factory = function(type) {
    let constr = type;
    let newCar;
    // error if the constructor doesn't exists
    if (typeof CarMaker[constr] !== 'function') {
        throw {
            name: 'Error',
            message: constr + 'doesn\'t exists',
        };
    }
    // inherit the parent but only once
    if (typeof CarMaker[constr].prototype.drive !== 'function') {
        CarMaker[constr].prototype = new CarMaker();
    }
    // create new instance
    newCar = new CarMaker[constr]();
    return newCar;
};
// define specific car makers
CarMaker.Compact = function() {
    this.doors = 4;
};
CarMaker.Convertible = function() {
    this.doors = 2;
};
CarMaker.SUV = function() {
    this.doors = 24;
};

let corolla = CarMaker.factory('Compact');
let solstice = CarMaker.factory('Convertible');
let cherokee = CarMaker.factory('SUV');

let jsFC = document.getElementById('js-factory-corolla');
jsFC.innerHTML = corolla.drive(); // "I have 4 doors"
let jsFS = document.getElementById('js-factory-solstice');
jsFS.innerHTML = solstice.drive(); // "I have 2 doors"
let jsFCh = document.getElementById('js-factory-cherokee');
jsFCh.innerHTML = cherokee.drive(); // "I have 17 doors"
