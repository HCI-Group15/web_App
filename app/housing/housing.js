'use strict';

angular.module('myApp.housing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/housing', {
    templateUrl: 'housing/housing.html',
    controller: 'HousingCtrl'
  });
  $routeProvider.when('/housing/housingInfo', {
    templateUrl: 'housing/housingInfo.html'
  });
}])

.controller('HousingCtrl', ['$scope', function($scope) {
    // Scope Variables Definitions
    $scope.list = [];
    $scope.default = "apt";
    $scope.pageId = 0;

    // fill the with 10 total samples of recreation
    $scope.list.push({
        name: "Campus Edge",
        desc: "Enjoy a very affordable apartment on the UF campus",
        img : "img/campues edge main.jpg",
        type: "apt",
        dist: 0.5
    });
    $scope.list.push({
        name: "Campus Lodge",
        desc: "Awesome",
        img : "img/campus lodge main.jpg",
        type: "apt",
        dist: 2.8
    });
    $scope.list.push({
        name: "Gateway at Glades",
        desc: "No sleep time. Where all parties get shutdown",
        img : "img/gate main.jpg",
        type: "apt",
        dist: 2.1
    });
    $scope.list.push({
        name: "Lexington Crossing",
        desc: "Extremely affordable",
        img : "img/lexi main.jpg",
        type: "bar",
        dist: 2.7
    });



    $scope.setPgId = function(pgId) {
        $scope.pageId = pgId;
    }

    $scope.getCurrPgValue = function() {
        var tmp = "";
        if(pgId === 0) {
            tmp = "bar";
        }
        else if(pgId === 1) {
            tmp = "rec";
        }
        return tmp;
    }
}]);
