var BlogPage = require('./blog.page.js');

describe('start', function () {

    var page;

    beforeEach(function () {
        page = new BlogPage();
        page.get();
    });

    describe('navigation', function(){
        it('should redirect to /',function(){
            browser.getCurrentUrl().then(function(url){
                expect(url).toBe('http://localhost:5000/');
            })
        });
    })

});