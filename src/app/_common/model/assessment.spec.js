describe('assessment model', function () {

    var assessment,
        $httpBackend,
        url = 'http://codeassessments-charl.rhcloud.com/assessment';
    beforeEach(module('common.assessments'));
    beforeEach(inject(function (_assessment_, _$httpBackend_) {
        assessment = _assessment_;
        $httpBackend = _$httpBackend_;
    }));

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
        $httpBackend.whenPOST(url).respond(assessmentData);
        var createdAssessment;
        assessment
            .create(assessmentData)
            .success(function(data){
                createdAssessment = data;
            });
        $httpBackend.expectPOST(url, assessmentData);
        $httpBackend.flush();
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