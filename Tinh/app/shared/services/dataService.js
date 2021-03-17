(function () {
    'use strict';

    angular
        .module('app')
        .factory('dataService', ['$http', '$q', function ($http, $q) {
            var service = {};
            service.getDatas = function () {
                var deferred = $q.defer();
                $http.get('/Data/Index/').then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.getDataByID = function (matinh) {
                var deferred = $q.defer();
                $http.get('/Data/Details?matinh=' + matinh).then(function (result) {
                    deferred.resolve(result.data);
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };
            
            service.addData = function (Data) {
                var deferred = $q.defer();
                $http.post('/Data/Create', Data).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };


            service.editData = function (data) {
                var deferred = $q.defer();
                $http.post('/Data/Edit', data).then(function () {

                    console.log(data);
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            service.deleteData = function (matinh) {
                var deferred = $q.defer();
                $http.post('/Data/Delete', { matinh: matinh }).then(function () {
                    deferred.resolve();
                }, function () {
                    deferred.reject();
                });
                return deferred.promise;
            };

            return service;
        }]);
})();