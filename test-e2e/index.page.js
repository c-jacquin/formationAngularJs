var IndexPage = function () {

    this.get = function () {
        browser.get('/');
    };

    this.getBlogButton = function(){
        return element(by.id('blog-link'));
    }
};

module.exports = IndexPage;