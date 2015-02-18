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

        .controller('HomeController', function (movies, collapse) {
            var self = this;
            this.movie = {
                query: ''
            };
            this.movieList = [];

            this.collapseId = 'home';

            this.greetingsAreDisplayed = function () {
                return this.movie.query.length > 0;
            };
            //on enregistre la collapse card dans le service avec le collapseId fournit en attribut via le html
            //on expose dans la vue la valeur stockée dans le service  ( changer le button si ouvert ou fermer )
            this.$collapse = collapse.register(self.collapseId, false);

            var page = 0;

            this.getMovies = function (query) {
                page++;
                movies
                    .findByName(query,page)
                    .then(function(list){
                        if(list.length < 30){
                            page = 0;
                        }
                        angular.forEach(list,function(movie,index){
                            self.movieList.push(movie);
                        });
                        //console.log(list)
                        collapse.getById('home').isOpen = true;
                    });
            };

        });
})();