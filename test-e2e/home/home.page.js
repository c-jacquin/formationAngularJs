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

    this.getMovieList = function () {
        return element(by.repeater('movie in home.movieList'));
    };

};

module.exports = StartPage;