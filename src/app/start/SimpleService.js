angular.module('start.SimpleService', [])

    .service('SimpleService', function () {
        this.sayHello = function (name) {
            return 'Hello, ' + name;
        };
    });