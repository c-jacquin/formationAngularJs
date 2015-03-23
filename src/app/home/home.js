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
            this.query ='';
            this.movieList = [];

            this.collapseId = 'home';

            var page = 0;
            var end = false;

            this.queryIsDisplayed = function () {
                return this.movie.query.length > 0;
            };

            this.getMovies = function (query,$event) {
                if($event){
                    self.movieList = [];
                    end = false;
                    page = 0;
                }
                page++;
                if(!end){
                    movies
                        .findByName(query,page)
                        .then(function(list){
                            if(list.length < 30){
                                end = true;
                            }
                            self.movieList.push.apply(self.movieList,list);
                            //self.movieList.push(list);
                            //console.log(Array.prototype.push(self.movieList,list));
                            //angular.forEach(list,function(movie,index){
                            //    self.movieList.push(movie);
                            //});
                            collapse.getById('home').isOpen = true;
                        });
                }

            };
        });
})();