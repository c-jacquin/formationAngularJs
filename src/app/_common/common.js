(function() {
    'use strict';

    angular.module('common', [
        'common.SimpleService',
        'common.movies',
        'common.blog',
        'common.collapse',
        'common.infiniteScroll'
    ])
        .config(function(DSProvider){
            DSProvider.defaults.basePath = 'http://localhost:3000/'; // etc.
        });
})();