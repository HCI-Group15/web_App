'use strict';

angular.module('myApp.housing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/housing', {
    templateUrl: 'housing/housing.html',
    controller: 'HousingCtrl'
  });
}])

.controller('HousingCtrl', ['$scope', function($scope) {
    // Scope Variables Definitions
    $scope.list = [];
    $scope.default = "apt";
    $scope.pageId = 0;
    $scope.moreInfo = false;
    $scope.selEl = 0;
    $scope.otherPics = false;

    // fill the with 10 total samples of recreation
    $scope.list.push({
        id  : 0,
        name: "Campus Edge",
        desc: "Enjoy a very affordable apartment on the UF campus",
        img : "img/campues edge main.jpg",
        imgs: ['img/Campus edge map.jpg','img/campus edge kitchen.jpg','img/campus edge pool.jpg','img/campus edge room.jpg'],
        type: "apt",
        dist: 0.5
    });
    $scope.list.push({
        id  : 1,
        name: "Campus Lodge",
        desc: "Awesome",
        img : "img/campus lodge main.jpg",
        type: "apt",
        dist: 2.8
    });
    $scope.list.push({
        id  : 2,
        name: "Gateway at Glades",
        desc: "No sleep time. Where all parties get shutdown",
        img : "img/gate main.jpg",
        type: "apt",
        dist: 2.1
    });
    $scope.list.push({
        id  : 3,
        name: "Lexington Crossing",
        desc: "Extremely affordable",
        img : "img/lexi main.jpg",
        type: "bar",
        dist: 2.7
    });


    $scope.seeMoreInfo = function(block, id) {
        $scope.moreInfo = block;
        $scope.selEl = id;
    };

    $scope.setPgId = function(pgId) {
        $scope.pageId = pgId;
    };

    $scope.getCurrPgValue = function() {
        var tmp = "";
        if(pgId === 0) {
            tmp = "bar";
        }
        else if(pgId === 1) {
            tmp = "rec";
        }
        return tmp;
    };
}]);
