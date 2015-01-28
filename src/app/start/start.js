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
    })

    .run(function ($http) {
        $http.get('/user')
            .success(function (data) {
                console.log(data);
            });
    });