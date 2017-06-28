'use strict';

let Subject = function() {
    this.observers = [];
};
Subject.prototype = {
    subscribeObserver: function(observer) {
        this.observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    },
    notifyObserver: function(observer) {
        let index = this.observers.indexOf(observer);
        if (index > -1) {
            return this.observers[index].notify(index);
        }
    },
    notifyAllObservers: function() {
        let notifications = [];
        for (let i = 0; i < this.observers.length; i++) {
            notifications.push(this.observers[i].notify(i));
        };
        return notifications;
    },
};
let Observer = function(value) {
    let number = value;
    return {
        notify: function(index) {
            return 'Observer '+number+' ('+index+') is notified!';
        },
    };
};
let subject = new Subject();

let observer1 = new Observer(1);
let observer2 = new Observer(2);
let observer3 = new Observer(3);
let observer4 = new Observer(4);

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

let notifySecondObserver = function() {
    let jsON = document.getElementById('js-observer-notifysecondobserver');
    // Observer 2 is notified!
    jsON.innerHTML = subject.notifyObserver(observer2);
};
console.log('notifySecondObserver:', notifySecondObserver);
let notifyAll = function() {
    let notifications = subject.notifyAllObservers();
    for ( let i in notifications ) {
      if ( typeof notifications[i] !== 'undefined' ) {
        let elem = document.createElement('p');
        elem.innerHTML = notifications[i];
        document.getElementById('js-observer-notifyall').appendChild(elem);
      }
    }
    // Observer 1 is notified!
    // Observer 2 is notified!
    // Observer 3 is notified!
    // Observer 4 is notified!
};
console.log('notifyAll:', notifyAll);
