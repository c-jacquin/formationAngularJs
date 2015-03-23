describe('SimpleService', function () {

    var simpleService;

    beforeEach(module('common'));
    beforeEach(inject(function (_simpleService_) {
        simpleService = _simpleService_;
    }));

    it('prepends "Hello, "', function () {
        var message = simpleService.sayHello('Name');
        expect(message).toBe('Hello, Name');
    });

    it('returns "Hello" when no name', function () {
        var message = simpleService.sayHello();
        expect(message).toBe('Hello');
    });

});