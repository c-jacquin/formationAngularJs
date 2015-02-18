describe('infinite scroller component', function() {

    var element,
        scope;


    beforeEach(module('common.infiniteScroll'));
    beforeEach(inject(function ($compile, $rootScope) {

        element = angular.element('<div infinite-scroll style="height:50px;overflow:auto;"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>');

        $compile(element)($rootScope.$new());

        scope = element.isolateScope();
    }));



    it('should call the callback defined in load-more attributtte',function(){

    })
});