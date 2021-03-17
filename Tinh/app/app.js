(function () {
    'use strict';

    angular
        .module('app', [
            'ngRoute'
        ])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.hashPrefix('');

            $routeProvider
                .when('/', {
                    controller: 'dataCtrl',
                    templateUrl: 'app/templates/data.html'
                })
                .when('/addData', {
                    controller: 'dataAddCtrl',
                    templateUrl: 'app/templates/addData.html'
                })

                .when('/editData/:matinh', {
                    controller: 'dataEditCtrl',
                    templateUrl: 'app/templates/editData.html'
                })
                .otherwise({ redirectTo: '/' });
        }]);
})();