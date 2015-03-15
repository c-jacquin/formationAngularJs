describe('HomeController', function () {

    var HomeController;

    beforeEach(module('home'));

    beforeEach(inject(function ($controller) {
        HomeController = $controller('HomeController');
    }));


    describe('when a name is set', function () {
        it('shows greetings', function () {
            HomeController.user.name = 'userName';
            expect(HomeController.greetingsAreDisplayed()).toBe(true);
        });
    });

});