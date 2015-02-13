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
        .controller('ListController', function (list, $timeout, $q) {
            var self = this;
            self.list = list.data;

            //configuration de la directive material
            //juste pour la demo
            self.selectedItem = null;
            self.searchText = null;

            self.querySearch = function (query) {
                var deferred = $q.defer();
                $timeout(function () {
                    var results;
                    if (query) {
                        results = self.list.filter(function (item) {
                            return (item.title.indexOf(query) === 0);
                        });
                    }
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            };

        });
})();