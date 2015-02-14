(function() {
    'use strict';

    angular.module('assessments.list', [])
        .config(function ($stateProvider) {
            $stateProvider.state('assessments.list', {
                url: '/list',
                views: {
                    assessment: {
                        controller: 'ListController',
                        controllerAs: 'assessments',
                        templateUrl: 'assessment/list/list.tpl.html',
                        resolve: {
                            list: function (assessment) {
                                return assessment.get();
                            }
                        }
                    }
                }
            });
        })
        //on peut injecter list puisque nous l'avons specifier dans le resolve du bloc config
        //le service $mdBottomSheet permet d'animer un petit menu en bas de l'ecran
        .controller('ListController', function (list, $timeout, $q, $mdBottomSheet) {
            var self = this;
            self.list = list.data;

            //configuration de la directive material
            //juste pour la demo
            self.selectedItem = null;
            self.searchText = null;

            self.querySearch = function (query) {
                var deferred = $q.defer();
                //timeout pour simuler un traitement asynchrone et donc resoudre une promise
                $timeout(function () {
                    var results;
                    if (query) {
                        //methode filter du prototype Array voir la doc sur mdn
                        results = self.list.filter(function (item) {
                            return (item.title.indexOf(query) === 0);
                        });
                    }
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            };

            self.details = function($event){
                //ici on peut parametrer bcp de choses la doc est bien faite
                //comme par exemple passer des variables locales ou des promesses au controlleur de la bottomsheet
                $mdBottomSheet.show({
                    templateUrl: 'assessment/list/bottom-sheet.tpl.html',
                    targetEvent: $event
                }).then(function(clickedItem) {
                    //do something
                });
            };
        });
})();