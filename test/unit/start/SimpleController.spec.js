describe('SimpleController', function () {

    var SimpleController;

    beforeEach(module('start.SimpleController'));
    beforeEach(inject(function ($controller) {
        SimpleController = $controller('SimpleController');
    }));

    it('is initialized with instructions', function () {
        expect(SimpleController.instructions).toBe('Enter your name');
    });

    describe('when no name is set', function () {

        beforeEach(function () {
            SimpleController.user.name = '';
        });

        it('shows instructions', function () {
            expect(SimpleController.instructionsAreDisplayed()).toBe(true);
        });

        it('hides greetings', function () {
            expect(SimpleController.greetingsAreDisplayed()).toBe(false);
        });

    });

    describe('when a name is set', function () {

        it('hides instructions', function () {
            SimpleController.user.name = 'userName';
            expect(SimpleController.instructionsAreDisplayed()).toBe(false);
        });

        it('shows greetings', function () {
            SimpleController.user.name = 'userName';
            expect(SimpleController.greetingsAreDisplayed()).toBe(true);
        });
    });


});