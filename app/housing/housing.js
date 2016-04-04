'use strict';

angular.module('myApp.housing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/housing', {
    templateUrl: 'housing/housing.html',
    controller: 'HousingCtrl'
  });
}])

.controller('HousingCtrl', ['$scope', function($scope) {

}]);
