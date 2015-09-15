(function () {
    'user strict';
    var controllerId = 'userDetailsController';

    function userDetailsController($scope, datacontext) {
        $scope.userName = 'andrepires';

        $scope.getUserDetails = function getUserDetails() {
            datacontext.getUserDetails($scope.userName);
        }
    }

    var app = angular.module('app');
    app.controller(controllerId, ['$scope', 'datacontext', userDetailsController]);
})();