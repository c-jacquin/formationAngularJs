angular.module('app', [
    'ui.router',
    'start'
])

    .config(function ($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/start');
    });