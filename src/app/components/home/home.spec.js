describe('HomeController', function () {

    var HomeController;


    describe('base feature', function(){

        beforeEach(module('home'));

        beforeEach(inject(function ($controller) {

            HomeController = $controller('HomeController');
        }));

        describe('when no name is set', function () {
            beforeEach(function () {
                HomeController.movie.query = '';
            });
            it('shows instructions', function () {
                expect(HomeController.instructionsAreDisplayed()).toBe(true);
            });
            it('hides greetings', function () {
                expect(HomeController.queryIsDisplayed()).toBe(false);
            });
        });
        describe('when a name is set', function () {
            it('hides instructions', function () {
                HomeController.movie.query = 'userName';
                expect(HomeController.instructionsAreDisplayed()).toBe(false);
            });
            it('shows greetings', function () {
                HomeController.movie.query = 'userName';
                expect(HomeController.queryIsDisplayed()).toBe(true);
            });
        });
    });
});