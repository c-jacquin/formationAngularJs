describe('Users', function () {

    var Users,
        $httpBackend;

    beforeEach(module('common.Users'));
    beforeEach(inject(function (_Users_, _$httpBackend_) {
        Users = _Users_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    beforeEach(function () {
        $httpBackend.whenPOST('/user').respond();
    });

    it('creates user', function () {
        var user = {name: 'Bob'};
        Users.create(user);
        $httpBackend.expectPOST('/user', user);
        $httpBackend.flush();
    });

    it('finds user by name', function () {
        var user = {name: 'Bob'};
        $httpBackend
            .whenGET('/user/Bob')
            .respond(user);

        var foundUser;
        Users.findByName(user.name)
            .then(function (user) {
                foundUser = user;
            });

        $httpBackend.expectGET('/user/Bob');
        $httpBackend.flush();
        expect(foundUser).toEqual(user);
    });

});