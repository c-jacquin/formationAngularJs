(function() {
    'use strict';

    angular.module('home', [
        'ui.router',
        'common'
    ])
        .config(function ($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                views: {
                    main: {
                        templateUrl: 'components/home/home.tpl.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            });
        })

        .controller('HomeController', function () {
            var self = this;

            self.movie = {
                query: ""
            };

            self.queryIsDisplayed = function () {
                return self.movie.query.length > 0;
            };

            self.instructionsAreDisplayed = function(){
                return self.movie.query.length === 0;
            };

        });
})();