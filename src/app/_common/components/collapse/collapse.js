(function() {
    'use strict';

    function collapseCardDirective(collapse) {
        return {
            restrict: 'EA',
            scope: {
                //identififiant de la carte (pour avoir plusieurs collapse-card par page)
                collapseId: '@',
                maxHeight: '@'
            },
            link: function (scope, element) {

                var section = element.find('section');

                //ici j'ai remplacer $scope.watch par Object.observe qui fonctionne a peu prés partout
                //le callback se declenchera a chaque click sur la directive collapse-button possedant le meme collapseId
                Object.observe(collapse.getById(scope.collapseId), function (newValue) {

                    //on teste la nouvelle valeur du booleen stocké dans le service et correspondant ai collapseId
                    //selon cette valeur on afecte a la propriete css max-height la valeur passée via les attributs html
                    //ou alors 0 pour refermer l'element
                    if (newValue[0].object.isOpen) {
                        section[0].style.height = scope.maxHeight + 'px';

                        section[0].style.maxHeight = scope.maxHeight + 'px';

                    } else {

                        section[0].style.maxHeight = '0';

                    }

                });
            }
        };
    }

    function CollapseButtonController($scope, collapse) {

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

    function collapseFactory($rootScope) {
        var data = {};
        return {
            //stocke dans data l'id d'un element collapsible et un booléen qui specifie si il est ouvert ou non
            register: function (id, isOpen) {
                data[id] = {
                    isOpen: isOpen
                };
                return data[id];
            },
            //change la valeur de l'attribut booleen correspondant à un id passer en parametre
            toggle: function (id) {
                //l'appel de cette methode permet de mettre a jour les données dans la vue, on indique à angular que des données ont changees et doivent être raffraichis
                $rootScope.$apply(function(){
                    data[id].isOpen = !data[id].isOpen;
                });
                return data[id];
            },
            //retourne l'objet correspondant a l'id passé en parametre
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