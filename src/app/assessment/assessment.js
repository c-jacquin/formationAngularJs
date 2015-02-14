(function(){
    'use strict';
    angular.module('assessments',[
        'assessments.creation',
        'assessments.list'
    ]).config(function($stateProvider){
        //ici l'état est abstract du coup on ne pourra pas s y rendre directement mais il sert de parents pour d'autres états ( layout )
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
        //$mdSidenav est fourni par ngMaterial et permet d'animer les directives md-sidenav ( menu lateral )
        this.toggleSideNav = function(){
            $mdSidenav('assessment').toggle()
                .then(function(){
                    $log.debug("toggle RIGHT is done");
                });
        };
    });
})();