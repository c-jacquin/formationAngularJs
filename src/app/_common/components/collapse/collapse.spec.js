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

        //on initialise le service
        collapse.register('test',false);

        //on créer les objets angular correspondant à des elements html utilisant nos directives
        button = angular.element('<div collapse-button collapse-id="test">click me !!!</div>');

        card = angular.element('<div collapse-card collapse-id="test" max-height="1000">Some text !!!</div>');

        buttonScope = $rootScope.$new();

        //on compile les bouts de html et fournis un scope ($rootScope.$new() return un nouveau scope)
        $compile(button)(buttonScope);
        $compile(card)($rootScope.$new());

        //on recupere les scope associés à chaque directive
        $controller('CollapseButtonController',{$scope : buttonScope});
        cardScope = card.isolateScope();
    }));

    it('should set the isOpen property of service at defined value', function () {
        expect(collapse.getById('test')).toBeDefined();
    });

    //on test la valeur du controlleur
    it('should change the value of the scope property', function(){
        expect(collapse.getById('test').isOpen).toBeFalsy();
        //on lance la methode du controller afin de tester son efficacité
        buttonScope.toggle('test');
        expect(collapse.getById('test').isOpen).toBeTruthy();
    });


    //on test la valeur du service
    it('should register a new collapse element in the service',function(){
        expect(collapse.getById('otherTest')).toBeUndefined();
        //on lance la methode du service afin de tester son efficacité
        collapse.register('otherTest',true);
        expect(collapse.getById('otherTest').isOpen).toBeTruthy();
    })
});