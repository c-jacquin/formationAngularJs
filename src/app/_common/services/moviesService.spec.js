describe('movies service', function () {


    var movies,
        moviesConfig,
        $httpBackend,
        query = 'matrix',
        url = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=';

    var dummyMovies = {
        movies :[
            {
                title: 'la grande vadrouille'
            },
            {
                title: 'le parrain'
            }
        ]
    };

    beforeEach(module('common.movies'));
    beforeEach(inject(function (_movies_, _$httpBackend_,_moviesConfig_) {
        movies = _movies_;
        moviesConfig = _moviesConfig_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should respond with an array of 2 elements', function () {
        $httpBackend.whenJSONP(url+moviesConfig.apiKey+'&q='+query+'&page=1&page_limit=30&callback=JSON_CALLBACK').respond(dummyMovies);
        var responseData;
        movies
            .findByName(query,1)
            .then(function(response){
                responseData = response;
            });

        $httpBackend.expectJSONP(url+moviesConfig.apiKey+'&q='+query+'&page=1&page_limit=30&callback=JSON_CALLBACK');
        $httpBackend.flush();
        expect(responseData.length).toBe(2);
    });

});