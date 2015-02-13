(function() {
    'use strict';

    angular.module('common.github', [])

        .factory('github', function ($http, $q) {

            var userInfo;

            return {
                getUserInfo: function (name) {
                    return $q(function (resolve, reject) {
                        $http({
                            method: 'JSONP',
                            url: 'https://api.github.com/users/' + name + '?callback=JSON_CALLBACK'
                        }).success(function (response) {
                            userInfo = response.data;
                            resolve(userInfo);
                        }).error(function (err) {
                            reject(err);
                        });
                    });
                },
                getInfo: function () {
                    if (userInfo) {
                        return userInfo;
                    } else {
                        throw new Error('userInfo is not defined');
                    }
                }
            };
        });
})();