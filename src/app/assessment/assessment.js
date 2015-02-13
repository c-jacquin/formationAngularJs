(function(){
    'use strict';
    angular.module('assessments',[
        'assessments.creation',
        'assessments.list'
    ]).config(function($stateProvider){
        $stateProvider.state('assessments',{
            abstract: true,
            views:{
                main: {
                    templateUrl: 'assessment/assessment.tpl.html',
                    controller: 'AssessmentController',
                    controllerAs: 'ctrl'
                }
            }
        });
    }).controller('AssessmentController',function($mdSidenav,$log){
        this.toggleSideNav = function(){
            $mdSidenav('assessment').toggle()
                .then(function(){
                    $log.debug("toggle RIGHT is done");
                });
        };
    });
})();