var StartPage = function () {

    this.get = function () {
        browser.get('/start');
    };

    this.getInstructionsElement = function () {
        return element(by.binding('ctrl.instructions'));
    };

    this.setName = function (name) {
        element(by.model('ctrl.user.name')).sendKeys(name);
    }

    this.getGreetingsElement = function () {
        return element(by.id('greetings'));
    };

};

module.exports = StartPage;