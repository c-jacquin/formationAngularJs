describe('HomeController', function () {

    var HomeController,
        movies,
        $q,
        moviesMock;

    var dummyMovies = [
        {
            title: 'matrix1'
        },
        {
            title: 'matrix2'
        }
    ];

    //on definie le module angular que l'on souhaite tester
    //on injecte les differents services necessaires au tests
    //et on definie un mock pour le service movies
    beforeEach(module('home', function ($provide) {
        // le service mock qui remplacera le service movies
        moviesMock = {
            findByName: function () {
                return $q(function (resolve, reject) {
                    resolve(dummyMovies);
                })
            }
        };
        //spyOn est fournis par jasmine et permet de mettre un listener sur une methode, nous pourrons donc tester si cette derniere a été appelée
        spyOn(moviesMock, 'findByName').and.callThrough();
        //on remplace le service github par le mock dans le systéme d'injection de dependance d'angular
        $provide.value('movies', moviesMock);
    }));

    beforeEach(inject(function ($controller, _$q_, _$timeout_, _movies_) {
        //ici c'est donc le mockService qui est injecter et non le service github original
        movies = _movies_;
        $q = _$q_;
        HomeController = $controller('HomeController');
        $timeout = _$timeout_;
    }));

    describe('movies feature', function () {
        it('should have call findByName method of movies service', function () {
            //on lance la methode du controller afin de tester si celle ci appelle bien la methode du service github
            HomeController.getMovies('matrix');
            //grace a la methode spyOn nous pouvons faire ce test
            expect(movies.findByName).toHaveBeenCalled();
        })
    });
});