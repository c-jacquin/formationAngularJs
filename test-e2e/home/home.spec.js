var HomePage = require('./home.page.js');
describe('homePage', function () {

    var page;

    beforeEach(function () {
        page = new HomePage();
        page.get();
    });

    describe('when a query is set', function () {
        beforeEach(function () {
            page.setQuery('matrix');
        });

        it('should shows search message', function () {
            expect(page.getSearchElement().getText()).toBe('Search : matrix');
        });


    });

    describe('when no query is set', function () {
        it('should hides search message', function () {
            expect(page.getSearchElement().isPresent()).toBe(false);
        });
    });

});