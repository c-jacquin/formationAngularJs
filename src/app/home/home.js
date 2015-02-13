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
                        templateUrl: 'home/home.tpl.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            });
        })

        .controller('HomeController', function (github, collapse) {
            var self = this;
            this.instructions = 'Enter your name';
            this.user = {
                name: ''
            };
            this.instructionsAreDisplayed = function () {
                return this.user.name.length === 0;
            };
            this.greetingsAreDisplayed = function () {
                return this.user.name.length > 0;
            };

            this.$collapse = collapse.getById('home');

            this.getGithubInfo = function (name) {
                github
                    .getUserInfo(name)
                    .then(function (userInfo) {
                        self.userInfo = userInfo;
                        collapse.getById('home').isOpen = true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            };

        });
})();