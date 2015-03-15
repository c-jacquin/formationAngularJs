(function() {
    'use strict';

    angular.module('common.blog', [
        'js-data'
    ])
        //.factory('blog', function ($http) {
        //    var url = 'http://localhost:3000/posts';
        //    return {
        //        create: function (post) {
        //            return $http.post(url, post);
        //        },
        //        find: function(id){
        //            return $http.get(url+'/'+id);
        //        },
        //        findAll: function (param) {
        //            return $http.get(url,param);
        //        },
        //        remove: function (id) {
        //            return $http.delete(url+'/'+id);
        //        },
        //        update: function (post) {
        //            return $http.put(url+'/'+post.id,post);
        //        }
        //    };
        //})
        .factory('blog', function (DS) {
            return DS.defineResource({
                name: 'post',
                idAttribute: 'id',
                endpoint: 'posts'
            });
        });
})();