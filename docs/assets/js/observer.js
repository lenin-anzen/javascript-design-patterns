'use strict';

var Subject = function() {
    this.observers = [];
}
Subject.prototype = {
    subscribeObserver: function(observer) {
        this.observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    },
    notifyObserver: function(observer) {
        var index = this.observers.indexOf(observer);
        if (index > -1) {
            return this.observers[index].notify(index);
        }
    },
    notifyAllObservers: function() {
        var notifications = [];
        for (var i = 0; i < this.observers.length; i++) {
            notifications.push(this.observers[i].notify(i));
        };
        return notifications;
    }
};
var Observer = function(value) {
    var number = value;
    return {
        notify: function(index) {
            return "Observer "+number+" ("+index+") is notified!";
        }
    }
}
var subject = new Subject();

var observer1 = new Observer(1);
var observer2 = new Observer(2);
var observer3 = new Observer(3);
var observer4 = new Observer(4);

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

var notifySecondObserver = function() {
    document.getElementById("js-observer-notifysecondobserver").innerHTML = subject.notifyObserver(observer2); // Observer 2 is notified!
}
var notifyAll = function() {
    var notifications = subject.notifyAllObservers();
    for ( var i in notifications ) {
        var elem = document.createElement('p');
        elem.innerHTML = notifications[i];
        document.getElementById("js-observer-notifyall").appendChild(elem);
    }
    // Observer 1 is notified!
    // Observer 2 is notified!
    // Observer 3 is notified!
    // Observer 4 is notified!
}
