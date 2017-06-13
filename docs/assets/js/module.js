'use strict';

var Exposer = (function() {
    var privateVariable = 10;
    var privateMethod = function() {
        var increment = privateVariable + 1;
        return 'Inside a private method!: ' + increment;
    }
    var methodToExpose = function() {
        return 'This is a method I want to expose!';
    }
    var otherMethodIWantToExpose = function() {
        return privateMethod();
    }
    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose
    };
})();
// Output: This is a method I want to expose!
document.getElementById("js-module-first").innerHTML = Exposer.first();
// Output: Inside a private method!
document.getElementById("js-module-second").innerHTML = Exposer.second();
// undefined
document.getElementById("js-module-methodToExpose").innerHTML = Exposer.methodToExpose;
