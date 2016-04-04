'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'body.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope', function($scope) {
    // Scope Variables Definitions
    $scope.firstPage = true;

    // Scope function definitions
    $scope.setFirstPage = function(val) {
        $scope.firstPage = val;
    };

}]);
