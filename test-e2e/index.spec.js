var IndexPage = require('./index.page.js');

describe('start', function () {

    var page;

    beforeEach(function () {
        page = new IndexPage();
        page.get();
    });

    describe('navigation', function(){
        it('should redirect to /blog/list',function(){

            page
                .getBlogButton()
                .click()
                .then(function(){
                    browser.getCurrentUrl().then(function(url){
                        expect(url).toBe('http://localhost:5000/list');
                    })
                });
        });
    })

});