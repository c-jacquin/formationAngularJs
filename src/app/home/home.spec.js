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
        githubMock = {
            getUserInfo: function () {
                return $q(function (resolve, reject) {
                    resolve(dummyUserInfo);
                })
            }
        };
        spyOn(githubMock, 'getUserInfo').and.callThrough();
        $provide.value('github', githubMock);
    }));


    beforeEach(inject(function ($controller, _$q_, _$timeout_, _github_) {
        github = _github_;
        $q = _$q_;
        HomeController = $controller('HomeController');
        $timeout = _$timeout_;
    }));

    it('is initialized with instructions', function () {
        expect(HomeController.instructions).toBe('Enter your name');
    });

    describe('when no name is set', function () {

        beforeEach(function () {
            HomeController.user.name = '';
        });

        it('shows instructions', function () {
            expect(HomeController.instructionsAreDisplayed()).toBe(true);
        });

        it('hides greetings', function () {
            expect(HomeController.greetingsAreDisplayed()).toBe(false);
        });

    });

    describe('when a name is set', function () {

        it('hides instructions', function () {
            HomeController.user.name = 'userName';
            expect(HomeController.instructionsAreDisplayed()).toBe(false);
        });

        it('shows greetings', function () {
            HomeController.user.name = 'userName';
            expect(HomeController.greetingsAreDisplayed()).toBe(true);
        });
    });

    describe('github feature', function () {
        it('should have call getUserInfo method of github service', function () {
            HomeController.getGithubInfo('Charl---');
            expect(github.getUserInfo).toHaveBeenCalled();
        })
    });
});