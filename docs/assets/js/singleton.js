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
        function turnOn( value, index ) {
            turnedOn = value;
            var buttonLabel = (value) ? 'Apagar impresora' : 'Encender impresora' ;
            document.getElementById('js-singleton-turnon').innerHTML = buttonLabel;
            document.getElementById('js-singleton-print').disabled = !value;
            getIsTurnedOn(index);
        }
        function getIsTurnedOn(index) {
            document.getElementById('js-singleton-getisturnedon-'+index).innerHTML = turnedOn;
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

officePrinter1.getIsTurnedOn(1);
officePrinter1.getIsTurnedOn(2);
