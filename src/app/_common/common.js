(function() {
    'use strict';

    angular.module('common', [
        'common.SimpleService',
        'common.movies',
        'common.assessments',
        'common.collapse',
        'common.infiniteScroll'
    ]);
})();