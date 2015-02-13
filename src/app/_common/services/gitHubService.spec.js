describe('github service', function () {

    var github,
        $httpBackend,
        url = 'https://api.github.com/users/Charl---?callback=JSON_CALLBACK';
    beforeEach(module('common.github'));
    beforeEach(inject(function (_github_, _$httpBackend_) {
        github = _github_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should respond with an object', function () {
        var data = {
            data:{}
        };
        $httpBackend.whenJSONP(url).respond(data);

        var responseData;
        github
            .getUserInfo('Charl---')
            .then(function(response){
                responseData = response;
            });

        $httpBackend.expectJSONP(url);
        $httpBackend.flush();
        expect(responseData).toBeDefined();
    });

});