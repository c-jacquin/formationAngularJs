var StartPage = function () {

    this.get = function () {
        browser.get('/');
    };

    this.setQuery = function (query) {
        element(by.model('home.movie.query')).sendKeys(query);
    };

    this.getSearchElement = function () {
        return element(by.id('search'));
    };

    this.getSearchbutton = function () {
        return element(by.id('search-button'));
    };

};

module.exports = StartPage;