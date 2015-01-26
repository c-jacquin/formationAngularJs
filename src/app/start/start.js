angular.module('start', [
    'ui.router',
    'start.SimpleController'
])

    .config(function ($stateProvider) {
        $stateProvider.state('start', {
            url: '/start',
            templateUrl: 'start/start.tpl.html',
            controller: 'SimpleController',
            controllerAs: 'ctrl'
        });
    });