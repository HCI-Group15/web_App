'use strict';

angular.module('myApp.nutrition', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/nutrition', {
    templateUrl: 'nutrition/nutrition.html',
    controller: 'NutritionCtrl'
  });
}])

.controller('NutritionCtrl', ['$scope', function($scope) {
    // Scope Variables Definitions
}]);
