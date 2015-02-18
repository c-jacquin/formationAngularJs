var StartPage = function () {

    this.get = function () {
        browser.get('/home');
    };

    this.setName = function (name) {
        element(by.model('home.movie.query')).sendKeys(name);
    };

    this.getGreetingsElement = function () {
        return element(by.id('greetings'));
    };

};

module.exports = StartPage;