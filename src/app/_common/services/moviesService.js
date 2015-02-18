(function() {
    'use strict';

    angular.module('common.movies',[])
        .constant('moviesConfig',{
            apiKey: 'vd6zqmgdxekywfcncxxer4jg'
        })
        .factory('movies', function ($http, $q, moviesConfig) {
            var movies = [];
            return {
                findByName: function (query,page) {
                    return $q(function(resolve,reject){
                        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey='+moviesConfig.apiKey+'&q='+query+'&page='+page+'&page_limit=30&callback=JSON_CALLBACK')
                            .success(function(data){
                                movies = data.movies;
                                resolve(movies);
                            })
                            .error(function(err){
                                reject(err);
                            })
                    });
                }
            };
        });
})();