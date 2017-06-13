'use strict';

var printer = (function () {
    var printerInstance;
    var turnedOn = false;
    function create () {
        function print() {
            if ( turnedOn === true ) {
                window.print();
            } else {
                alert('Debes prender la impresora!');
            }
        }
        function turnOn( value ) {
            turnedOn = value;
            var buttonLabel = (value) ? 'Apagar impresora' : 'Encender impresora' ;
            document.getElementById('js-singleton-turnon').innerHTML = buttonLabel;
            document.getElementById('js-singleton-print').disabled = !value;
            getIsTurnedOn();
        }
        function getIsTurnedOn() {
            document.getElementById('js-singleton-getisturnedon').innerHTML = turnedOn;
            return turnedOn;
        }
        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn,
            getIsTurnedOn: getIsTurnedOn
        };
    }
    return {
        getInstance: function() {
            if(!printerInstance) {
                printerInstance = create();
            }
            return printerInstance;
        }
    };
})();

var officePrinter1 = printer.getInstance();
var officePrinter2 = printer.getInstance();

officePrinter1.getIsTurnedOn();
