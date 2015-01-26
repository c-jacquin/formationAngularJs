describe('SimpleService.sayHello', function () {

    var SimpleService;

    beforeEach(module('start.SimpleService'));
    beforeEach(inject(function (_SimpleService_) {
        SimpleService = _SimpleService_;
    }));

    it('prepends "Hello, "', function () {
        var message = SimpleService.sayHello('Name');
        expect(message).toBe('Hello, Name');
    });

});