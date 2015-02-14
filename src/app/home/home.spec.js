describe('HomeController', function () {

    var HomeController,
        github,
        $q,
        githubMock;

    var dummyUserInfo = {
        name: 'dummy'
    };

    //on definie le module angular que l'on souhaite tester
    //on inject les differents services necessaires au tests
    //et on definie un mock pour le service github$
    beforeEach(module('home', function ($provide) {
        // le service mock qui remplacera le service github
        githubMock = {
            getUserInfo: function () {
                return $q(function (resolve, reject) {
                    resolve(dummyUserInfo);
                })
            },
            getInfo: function(){
                return dummyUserInfo;
            }
        };
        //spyOn est fournis par jasmine et permet de mettre un listener sur une methode, nous pourrons donc tester si cette derniere a été appelée
        spyOn(githubMock, 'getUserInfo').and.callThrough();
        //on remplace le service github par le mock dans le systéme d'injection de dependance d'angular
        $provide.value('github', githubMock);
    }));

    beforeEach(inject(function ($controller, _$q_, _$timeout_, _github_) {
        //ici c'est donc le mockService qui est injecter et non le service github original
        github = _github_;
        $q = _$q_;
        HomeController = $controller('HomeController');
        $timeout = _$timeout_;
    }));


    describe('when a name is set', function () {

        it('shows greetings', function () {
            HomeController.user.name = 'userName';
            expect(HomeController.greetingsAreDisplayed()).toBe(true);
        });
    });

    describe('github feature', function () {
        it('should have call getUserInfo method of github service', function () {
            //on lance la methode du controller afin de tester si celle ci appelle bien la methode du service github
            HomeController.getGithubInfo('Charl---');
            //grace a la methode spyOn nous pouvons faire ce test
            expect(github.getUserInfo).toHaveBeenCalled();
        })
    });
});