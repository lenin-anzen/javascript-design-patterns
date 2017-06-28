'use strict';

let printer = (function() {
  let printerInstance;
  let turnedOn = false;
  function create() {
    function print() {
      if ( turnedOn === true ) {
        window.print();
      } else {
        alert('Debes prender la impresora!');
      }
    }
    function turnOn( value, index ) {
      turnedOn = value;
      let btnLabel = (value) ? 'Apagar impresora' : 'Encender impresora';
      document.getElementById('js-singleton-turnon').innerHTML = btnLabel;
      document.getElementById('js-singleton-print').disabled = !value;
      getIsTurnedOn(index);
    }
    function getIsTurnedOn(index) {
 let js = document.getElementById('js-singleton-getisturnedon-'+index);
      js.innerHTML = turnedOn;
      return turnedOn;
    }
    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn,
      getIsTurnedOn: getIsTurnedOn,
    };
  }
  return {
    getInstance: function() {
      if (!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    },
  };
})();

let officePrinter1 = printer.getInstance();
let officePrinter2 = printer.getInstance();

officePrinter1.getIsTurnedOn(1);
officePrinter1.getIsTurnedOn(2);

console.log('officePrinter2:', officePrinter2);
