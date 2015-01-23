angular.module('home', [])

    .config(function ($stateProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'home/home.tpl.html',
            controller: 'HomeController'
        });
    })

    .controller('HomeController', function ($scope) {
        $scope.message = 'Enter your name';
    });