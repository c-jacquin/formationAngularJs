(function() {
    'use strict';

    angular.module('blog.list', [
        'common',
        'ui.router',
        'ngMaterial'
    ])
        .config(function ($stateProvider) {
            $stateProvider.state('blog.list', {
                url: '/list',
                views: {
                    blog: {
                        controller: 'ListController',
                        controllerAs: 'posts',
                        templateUrl: 'blog/list/list.tpl.html',
                        resolve: {
                            list: function (blog) {
                                return blog.findAll();
                            }
                        }
                    }
                }
            });
        })
        //on peut injecter list puisque nous l'avons specifier dans le resolve du bloc config
        //le service $mdBottomSheet permet d'animer un petit menu en bas de l'ecran
        .controller('ListController', function (list, $timeout, $q, $mdDialog) {
            var self = this;
            self.list = list;

            self.details = function($event,id,$index){
                //ici on peut parametrer bcp de choses la doc est bien faite
                //comme par exemple passer des variables locales ou des promesses au controlleur de la bottomsheet
                $mdDialog.show({
                    templateUrl: 'blog/list/dialog.tpl.html',
                    locals : {
                        post: self.list[$index]
                    },
                    controller: function(blog, post){
                        var self = this;
                        self.post = post;

                        this.update = function(){
                            //update the post
                        };

                        this.remove = function(){
                            blog
                                .remove(id)
                                .then(function(){
                                    self.list.splice($index,1);
                                    $mdBottomSheet.hide();
                                })
                        }
                    },
                    controllerAs: 'dialog',
                    targetEvent: $event
                }).then(function(clickedItem) {
                    //do something
                });
            };
        });
})();