'use strict';

let Exposer = (function() {
    let privateVariable = 10;
    let privateMethod = function() {
        let increment = privateVariable + 1;
        return 'Inside a private method!: ' + increment;
    };
    let methodToExpose = function() {
        return 'This is a method I want to expose!';
    };
    let otherMethodIWantToExpose = function() {
        return privateMethod();
    };
    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose,
    };
})();
// Output: This is a method I want to expose!
let jsMF = document.getElementById('js-module-first');
jsMF.innerHTML = Exposer.first();
// Output: Inside a private method!
let jsMS = document.getElementById('js-module-second');
jsMS.innerHTML = Exposer.second();
// undefined
let jsMMTE = document.getElementById('js-module-methodToExpose');
jsMMTE.innerHTML = Exposer.methodToExpose;
