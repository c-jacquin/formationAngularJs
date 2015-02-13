(function() {
    'use strict';

    function collapseCardDirective(collapse) {
        return {
            restrict: 'EA',
            scope: {
                //identififiant de la carte (pour avoir plusieurs collapse-card par page)
                collapseId: '@',
                isOpen: '=',
                maxHeight: '@'
            },
            link: function (scope, element) {

                var section = element.find('section');

                //ici j'ai remplacer $scope.watch par Object.observe qui fonctionne a peu prés partout 4 fois plus rapidedement
                //le callback se declenchera a chaque click sur la directive collapse-button possedant le me collapseId
                Object.observe(collapse.getById(scope.collapseId), function (newValue) {

                    //on teste la nouvelle valeur du booleen stocké dans le service et correspondant ai collapseId
                    //selon cette valeur on afecte a la propriete css max-height la valeur passée via les attributs html
                    //ou alors 0 pour refermer l'element
                    if (newValue[0].object.isOpen) {

                        section[0].style.maxHeight = scope.maxHeight + 'px';

                    } else {

                        section[0].style.maxHeight = '0';

                    }

                });
            }
        };
    }

    function CollapseButtonController($scope, collapse) {
        //on enregistre la collapse card dans le service avec le collapseId fournit en attribut via le html
        //on expose a la vue l'objet stocké dans le service collapse correspondant a la valeur collapseId passée via les attributs html
        collapse.register($scope.collapseId, $scope.isOpen || false);


        //au click sur l'element on change la valeur de l'attribut isOpen de l'objet stocké dans le service
        $scope.toggle = function () {
            collapse.toggle($scope.collapseId);
        };
    }

    function collapseButtonDirective() {
        return {
            restrict: 'A',
            scope: {
                collapseId: '@'
            },
            controller: 'CollapseButtonController',
            link: function (scope, element, attrs) {
                element.bind('click', scope.toggle);
            }
        };
    }

    function collapseFactory() {
        var data = {};
        return {
            register: function (id, isOpen) {
                data[id] = {
                    isOpen: isOpen
                };
                return data[id];
            },
            toggle: function (id) {
                data[id].isOpen = !data[id].isOpen;
                return data[id];
            },
            getById: function (id) {
                return data[id];
            }
        };
    }


    angular.module('common.collapse', [])
        .controller('CollapseButtonController', CollapseButtonController)
        .directive('collapseCard', collapseCardDirective)
        .directive('collapseButton', collapseButtonDirective)
        .factory('collapse', collapseFactory);
})();