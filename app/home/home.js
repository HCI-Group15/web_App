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
    $scope.pageId = 0;

    // Scope function definitions
    $scope.setPgId = function(pgId) {
        $scope.pageId = pgId;
    }
}]);
