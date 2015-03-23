(function() {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ui.router',
        'home',
        'common'
    ])
        .config(function ($urlRouterProvider, $locationProvider, $sceProvider, $mdThemingProvider) {

            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/');

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .warnPalette('deep-orange')
                .accentPalette('cyan');
        })

        .run(function () {
            console.log('run !!!');
        });
})();