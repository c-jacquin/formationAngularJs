(function() {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ui.router',
        'restangular',
        'home',
        'assessments',
        'common'
    ])
        .config(function ($urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');
        })

        .run(function () {
            console.log('run !!!');
        });
})();