describe('post creation controller', function () {

    var CreationController,
        blog,
        $httpBackend,
        $mdToast;


    var movie = {
        title: 'matrix1'
    };

    var dummyPost = {
        id: 'dummyId',
        title : 'my Post'
    };


    beforeEach(module('blog.creation'));
    beforeEach(inject(function ($controller,_$httpBackend_,_blog_,_$state_,_$mdToast_) {
        $httpBackend = _$httpBackend_;
        blog = _blog_;
        $mdToast = _$mdToast_;

        CreationController = $controller('CreationController',{
            movie: movie,
            blog: blog,
            $mdToast: $mdToast
        });
        spyOn(blog,'create').and.callThrough();

        spyOn($mdToast,'show').and.callThrough();

        $httpBackend.whenPOST('http://localhost:3000/posts').respond(dummyPost);

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create a new post and display a toast', function () {
        CreationController
            .submit();
        expect(blog.create).toHaveBeenCalled();
        $httpBackend.flush();
        expect($mdToast.show).toHaveBeenCalled();
    });

    it('should expose the movie if it exist')
});