angular.module('app', [
    'ui.router',
    'home'
])

    .config(function ($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');
        $locationProvider.html5Mode(true);
    });