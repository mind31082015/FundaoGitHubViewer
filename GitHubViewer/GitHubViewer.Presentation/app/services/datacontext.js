(function () {
    'use strict';
    var serviceId = 'datacontext';

    function datacontext($rootScope, $http, config) {
        var serviceUrl = config.remoteServiceUrl;

        var getUserDetails = function (userName) {
            function onSeccess(response) {
                return $rootScope.userDetails = response.data;
            }

            function onError(error) {
                console.log(error.message);
            }

            return $http.get(serviceUrl + '/users/' + userName)
                .then(onSeccess)
                .catch(onError);
        };

        return {
            getUserDetails: getUserDetails
        };
    }

    var app = angular.module('app');
    app.service(serviceId, ['$rootScope', '$http', 'config', datacontext]);
})();