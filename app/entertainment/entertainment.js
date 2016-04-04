'use strict';

angular.module('myApp.entertainment', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/entertainment', {
    templateUrl: 'entertainment/entertainment.html',
    controller: 'EntCtrl'
  });
}])

.controller('EntCtrl', ['$scope', function($scope) {
    // Scope Variables Definitions
}]);
