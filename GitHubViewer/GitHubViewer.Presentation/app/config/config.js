(function () {
    'use strict';
    var serviceId = 'config';

    var config = {
        remoteServiceUrl: 'https://api.github.com'
    }

    var app = angular.module('app');
    app.value(serviceId, config);
})();