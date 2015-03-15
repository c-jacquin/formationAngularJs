describe('post list controller', function () {

    var ListController,
        $mdDialog;

    var dummyPosts = [
        {
            id: 'dummyId',
            title : 'my Post'
        },
        {
            id: 'otherDummyId',
            title : 'my other Post'
        }];


    beforeEach(module('blog.list'));
    beforeEach(inject(function ($controller,_$mdDialog_) {
        $mdDialog = _$mdDialog_;

        ListController = $controller('ListController',{
            list: dummyPosts,
            $mdDialog: $mdDialog
        });

        spyOn($mdDialog,'show').and.callThrough();

    }));

    it('should expose the lit of posts', function () {
        expect(ListController.list).toBe(dummyPosts);

    });

    it('should display a material dialog',function(){
        ListController.details();
        expect($mdDialog.show).toHaveBeenCalled();
    });
});