(function() {
    'use strict';

    angular.module('common.assessments', [])
        //.config(function(RestangularProvider){
        //    RestangularProvider.setBaseUrl('http://codeassessments-charl.rhcloud.com/');
        //})
        //.factory('assessments',function(Restangular){
        //    var assessments = Restangular.all('assessment');
        //    return {
        //        create: function(assessment){
        //            return assessments.post(assessment);
        //        },
        //        get: function(){
        //            return assessments.getList();
        //        }
        //    }
        //});
        .factory('assessment', function ($http) {
            var url = 'http://codeassessments-charl.rhcloud.com/assessment';
            return {
                create: function (assessment) {
                    return $http.post(url, assessment);
                },
                get: function () {
                    return $http.get(url);
                }
            };
        });
})();