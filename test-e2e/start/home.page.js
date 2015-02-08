var StartPage = function () {

    this.get = function () {
        browser.get('/start');
    };

    this.getInstructionsElement = function () {
        return element(by.binding('home.instructions'));
    };

    this.setName = function (name) {
        element(by.model('home.user.name')).sendKeys(name);
    }

    this.getGreetingsElement = function () {
        return element(by.id('greetings'));
    };

};

module.exports = StartPage;