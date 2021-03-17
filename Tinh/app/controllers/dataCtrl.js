(function () {
    'use strict';

    angular
        .module('app')
        .controller('dataCtrl', ['$scope', 'dataService', function ($scope, dataService) {
            $scope.data = [];

            getData();

            function getData() {
                dataService.getDatas().then(function (result) {
                    $scope.data = result;
                });
            }

            $scope.deleteData = function (matinh) {
                dataService.deleteData(matinh).then(function () {
                    toastr.success('Xoá thành công!');
                    getData();
                }, function () {
                    toastr.error('Xóa thất bại mã: ' + matinh);
                });
            };
        }])
        .controller('dataAddCtrl', ['$scope', '$location', 'dataService', function ($scope, $location, dataService) {
            $scope.createData = function (data) {
                dataService.addData(data).then(function () {
                    toastr.success("Tạo dữ liệu thành công! ");
                    $location.path('/');
                }, function () {
                    toastr.error('Lỗi tạo dữ liệu!');
                });
            };
        }])

        .controller('dataEditCtrl', ['$scope', '$routeParams', '$location', 'dataService', function ($scope, $routeParams, $location, dataService) {
            $scope.data = {};
            $scope.states = {
                showUpdateButton: false
            };

            dataService.getDataByID($routeParams.matinh).then(function (result) {
                $scope.data = result;
                $scope.states.showUpdateButton = true;
                }, function () {
                    toastr.error('Lỗi khi tìm nạp bởi mã: ' + $routeParams.matinh);
                });

                $scope.updateData = function (data) {
                    dataService.editData(data).then(function () {
                        toastr.success('Cập nhật thành công!');
                        $location.path('/');
                    }, function () {
                        toastr.error('Lỗi cập nhật');
                    });
                };
            }]);
    
})();
