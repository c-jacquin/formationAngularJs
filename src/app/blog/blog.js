(function(){
    'use strict';
    angular.module('blog',[
        'blog.creation',
        'blog.list'
    ]).config(function($stateProvider){
        //ici l'état est abstract du coup on ne pourra pas s y rendre directement mais il sert de parents pour d'autres états ( layout )
        $stateProvider.state('blog',{
            abstract: true,
            views:{
                main: {
                    templateUrl: 'blog/blog.tpl.html',
                    controller: 'BlogController',
                    controllerAs: 'ctrl'
                }
            }
        });
    }).controller('BlogController',function($mdSidenav,$log){
        //$mdSidenav est fourni par ngMaterial et permet d'animer les directives md-sidenav ( menu lateral )
        this.toggleSideNav = function(){
            $mdSidenav('blog').toggle()
                .then(function(){
                    $log.debug("toggle RIGHT is done");
                });
        };
    });
})();