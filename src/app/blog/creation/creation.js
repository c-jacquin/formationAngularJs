(function() {
    'use strict';

    angular.module('blog.creation', [
        'common',
        'ui.router',
        'ngMaterial'
    ])
        .config(function ($stateProvider) {
            $stateProvider.state('blog.creation', {
                url: '/post/:movieName',
                views: {
                    blog: {
                        controller: 'CreationController',
                        controllerAs: 'blog',
                        templateUrl: 'blog/creation/creation.tpl.html'
                    }
                },
                resolve: {
                    movie: function(movies,$stateParams){
                        console.log($stateParams);
                        if($stateParams.movieName){
                            return movies.findByName($stateParams.movieName,1);
                        }else{
                            return [];
                        }
                    }
                }
            });
        })
        .controller('CreationController', function (blog, $log, movie, movies,$mdToast) {
            var self = this;
            movie[0] ? self.movie = movie[0] : self.movie = {};
            this.submit = function () {
                blog
                    .create(self)
                    .then(function () {
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Simple Toast!')
                                .hideDelay(3000)
                        );
                        //$state.go('blog.list');
                    })
            };

            this.getMovies = function (query) {
                return movies
                    .findByName(query,1);
            };

        });
})();