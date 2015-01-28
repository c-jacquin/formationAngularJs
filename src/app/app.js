angular.module('app', [
    'ui.router',
    'start'
])

    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/start');
        //$locationProvider.html5Mode(true);
    });