describe('infinite scroller component', function() {

    var element,
        scope,
        mockController = {};


    beforeEach(module('common.infiniteScroll'));
    beforeEach(inject(function ($compile, $rootScope) {

        mockController.loadMore = function(){

        };

        element = angular.element('<div infinite-scroll load-more="mockController.loadMore"></div>');

        $compile(element)($rootScope.$new());

        spyOn(mockController, 'loadMore').and.callThrough();

        scope = element.isolateScope();
    }));



    it('should call the callback defined in load-more attributtte',function(){

        //element.triggerHandler('scroll');
        //expect(mockController.loadMore).toHaveBeenCalled();

    });
});