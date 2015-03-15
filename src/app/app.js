(function() {
    'use strict';

    angular.module('app', [
        'ngMaterial',
        'ui.router',
        'home',
        'blog',
        'common'
    ])
        .config(function ($urlRouterProvider, $locationProvider, $sceProvider, $mdThemingProvider) {

            $sceProvider.enabled(false);
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('cyan');
        })

        .run(function () {
            console.log('run !!!');
        });
})();