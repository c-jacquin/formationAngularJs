var StartPage = require('./start.page.js');

describe('start', function () {

    var page;

    beforeEach(function () {
        page = new StartPage();
        page.get();
    });


    describe('when a name is set', function () {
        beforeEach(function () {
            page.setName('Name');
        });
        it('hides instructions', function () {
            expect(page.getInstructionsElement().isPresent()).toBe(false);
        });
        it('shows greetings message', function () {
            expect(page.getGreetingsElement().getText()).toBe('Search : Name');
        });
    });

});