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
            this.user = {
                name: ''
            };
            this.collapseId = 'home';

            this.greetingsAreDisplayed = function () {
                return this.user.name.length > 0;
            };
            //on enregistre la collapse card dans le service avec le collapseId fournit en attribut via le html
            //on expose dans la vue la valeur stockée dans le service  ( changer le button si ouvert ou fermer )
            this.$collapse = collapse.register(self.collapseId, false);


            this.getGithubInfo = function (name) {
                github
                    .getUserInfo(name)
                    .then(function (userInfo) {
                        self.userInfo = userInfo;
                        //on utilise le service collapse afin d'ouvrir la collapseCard une fois les données récuperer via github
                        collapse.getById('home').isOpen = true;
                    })
                    .catch(function (err) {
                        console.log(err);
                    });
            };

        });
})();