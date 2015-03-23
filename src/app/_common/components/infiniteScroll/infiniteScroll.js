(function(){
    'use strict';

    function infiniteScrollDirective(){
        return{
            restrict: 'EA',
            scope: {
                whenScrolled : '&'
            },
            link: function(scope, elm, attr) {
                var raw = elm[0];

                elm.bind('scroll', function(e) {
                    if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {

                        scope.$apply(scope.whenScrolled);

                    }
                });
            }
        };
    }

    angular.module('common.infiniteScroll',[])
        .directive('infiniteScroll',infiniteScrollDirective);
})();