describe('collapse component', function() {

    var button,
        card,
        buttonScope,
        cardScope,
        collapse;


    beforeEach(module('common.collapse'));
    beforeEach(inject(function ($compile, $rootScope, $controller, _collapse_) {

        //le service
        collapse = _collapse_;

        //on créer les objets angular correspondant à des elements html utilisant nos directives
        button = angular.element('<div collapse-button collapse-id="test">click me !!!</div>');
        card = angular.element('<div collapse-card collapse-id="test" is-open="false" max-height="1000">Some text !!!</div>');


        //on compile les bouts de html
        $compile(button)($rootScope.$new());
        $compile(card)($rootScope.$new());

        //on recupere les scope associés à chaque directive
        buttonScope = button.isolateScope();
        cardScope = card.isolateScope();
    }));

    it('should set the isOpen property of service at defined value', function () {
        expect(collapse.getById('test')).toBeDefined();
    });

    //on test la valeur du controlleur
    it('should change the value of the scope property', function(){
        expect(collapse.getById('test').isOpen).toBeFalsy();
        buttonScope.toggle();
        expect(collapse.getById('test').isOpen).toBeTruthy();
    });


    //on test la valeur du service
    it('should register a new collapse element in the service',function(){
        expect(collapse.getById('otherTest')).toBeUndefined();
        collapse.register('otherTest',true);
        expect(collapse.getById('otherTest').isOpen).toBeTruthy();
    })
});