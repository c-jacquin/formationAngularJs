(function() {
    'use strict';

    angular.module('common.SimpleService', [])

        .service('simpleService', function () {

            this.sayHello = function (name) {
                if (!name)
                    return 'Hello';
                return 'Hello, ' + name;
            };

        });
})();