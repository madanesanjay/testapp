'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('viewicsApp', [
    'ngRoute',
    'ngResource',
    'chart.js',
    'ui.grid',
    'toastr',
    'angular-timeline',
    'viewicsApp.dash'
]).
config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/dash'});
    }]);
