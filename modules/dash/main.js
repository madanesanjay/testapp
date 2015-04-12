'use strict';

angular.module('viewicsApp.dash', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/dash', {
                    templateUrl: 'modules/dash/main.html',
                    controller: 'DashboardCtrl'
                });
            }])

        .controller('DashboardCtrl', ['$scope', 'toastr', 'DataService', function ($scope, toastr, DataService) {
                /* Bar chart */
                $scope.barLabels = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
                $scope.barSeries = ['Series A'];
                $scope.barData = [
                    [5000, 9000, 7800, 9500, 7500, 8500]
                ];

                /* Line chart */
                $scope.lineLabels = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
                $scope.lineSeries = ['Series A'];
                $scope.lineData = [
                    [5000, 9000, 7800, 9500, 7500, 8500]
                ];

                /* Donut chart*/
                $scope.donutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
                $scope.donutData = [300, 500, 100];

                /*Pie Chart*/
                $scope.pieLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
                $scope.pieData = [300, 500, 100];

                /* Table Data*/

                $scope.gridOptions = {
                    enableSorting: true,
                    columnDefs: [
                        {field: 'name'},
                        {field: 'gender'},
                        {field: 'company', enableSorting: false}
                    ],
                    onRegisterApi: function (gridApi) {
                        $scope.gridApi = gridApi;
                    }
                };

                var getGridData = function () {
                    DataService.getData().query({},
                            function (data) {
                                $scope.gridOptions.data = data;
                                toastr.success('Data loaded successfully', '');
                            },
                            function (err) {
                                toastr.error('Data loading failed.', '');
                            });
                };

                getGridData();
            }]);