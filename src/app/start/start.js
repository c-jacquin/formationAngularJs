angular.module('start', [
    'ui.router'
])

    .config(function ($stateProvider) {
        $stateProvider.state('start', {
            url: '/start',
            templateUrl: 'start/start.tpl.html',
            controller: 'SimpleController'
        });
    });