var StartPage = require('./start.page');

describe('start', function () {

    var page;

    beforeEach(function () {
        page = new StartPage();
        page.get();
    });

    describe('when no name is set', function () {
        it('shows instructions', function () {
            expect(page.getInstructionsElement().getText()).toBe('Enter your name');
        });
        it('hides greetings', function () {
            expect(page.getGreetingsElement().isPresent()).toBe(false);
        });
    });

    describe('when a name is set', function () {
        beforeEach(function () {
            page.setName('Name');
        });
        it('hides instructions', function () {
            expect(page.getInstructionsElement().isPresent()).toBe(false);
        });
        it('shows greetings message', function () {
            expect(page.getGreetingsElement().getText()).toBe('Welcome, Name');
        });
    });

});