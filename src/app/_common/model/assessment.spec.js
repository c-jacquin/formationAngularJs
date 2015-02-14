describe('assessment model', function () {

    var assessment,
        $httpBackend,
        url = 'http://codeassessments-charl.rhcloud.com/assessment';
    //on indique le nom du module angular à tester
    beforeEach(module('common.assessments'));
    //on indique les services à injecter afin de les utiliser dans nos tests
    // le _ est ignorer par l'injecteur d'angular cela evite des collusions
    beforeEach(inject(function (_assessment_, _$httpBackend_) {
        assessment = _assessment_;
        $httpBackend = _$httpBackend_;
    }));

    //executer aprés chaque test
    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should create an assessment', function () {
        var assessmentData = {
            title: 'i am a title',
            statCode : 'public class MySuperClass{}',
            instructions: 'do something'
        };
        //on indique un comportement à adopter en quand d'appel $http en POST vers une url donnée
        $httpBackend.whenPOST(url).respond(assessmentData);
        //cette varible permettra de tester plus bas
        var createdAssessment;
        //on lance la methode du service
        assessment
            .create(assessmentData)
            .success(function(data){
                createdAssessment = data;
            });
        //on test si l'appel http a bien été effectué
        $httpBackend.expectPOST(url, assessmentData);
        //on resoud les promise
        $httpBackend.flush();
        //ici on test les données rtournées par la requete
        expect(createdAssessment).toBeDefined();
    });

    it('should return an array of assessments', function () {
        var assessments = [{
            title: 'title',
            _id: 'strange mongodb id'
        },{
            title: 'an other title',
            _id: 'an other strange mongodb id'
        }];
        $httpBackend.whenGET(url).respond(assessments);

        var assessmentsList;
        assessment
            .get()
            .success(function(data){
                assessmentsList = data;
            });

        $httpBackend.expectGET(url);
        $httpBackend.flush();
        expect(assessmentsList).toEqual(assessments);
    });

});