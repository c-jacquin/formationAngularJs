(function() {
    'use strict';

    angular.module('assessments.creation', [])
        .config(function ($stateProvider) {
            $stateProvider.state('assessments.creation', {
                url: '/creation',
                views: {
                    assessment: {
                        controller: 'CreationController',
                        controllerAs: 'assessment',
                        templateUrl: 'assessment/creation/creation.tpl.html'
                    }
                }
            });
        })
        .controller('CreationController', function (assessment, $log) {
            var self = this;
            this.submit = function () {
                assessment
                    .create(self)
                    .then(function (assessment) {
                        $log.info('created ', assessment);
                    })
                    .catch(function (err) {
                        $log.error(err.message);
                    });
            };
        });
})();