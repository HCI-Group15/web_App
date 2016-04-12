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
    $scope.list = [];
    $scope.default = "res";
    $scope.pageId = 0;
    $scope.moreInfo = false;
    $scope.selEl = 0;

    // fill the with 10 total samples of recreation
    $scope.list.push({
        id  : 0,
        name: "Andaz",
        desc: "Indian Restaurant",
        img : "nutrition/Restaurants/andaz main.JPG",
        type: "res",
        dist: 5
    });
    $scope.list.push({
        id  : 1,
        name: "DragonFly",
        desc: "Japanese Place",
        img : "nutrition/Restaurants/dragonfly main.JPG",
        type: "res",
        dist: 2
    });
    $scope.list.push({
        id  : 2,
        name: "Kabab House",
        desc: "Another Indian Place",
        img : "nutrition/Restaurants/kabab main.JPG",
        type: "res",
        dist: 0.5
    });
    $scope.list.push({
        id  : 3,
        name: "Leonardos",
        desc: "Italian Place",
        img : "nutrition/Restaurants/leonardos main.JPG",
        type: "res",
        dist: 4
    });
    $scope.list.push({
        id  : 4,
        name: "Manuel",
        desc: "What is that",
        img : "nutrition/Restaurants/manuel main.JPG",
        type: "res",
        dist: 0.1
    });
    $scope.list.push({
        id  : 5,
        name: "Sushi Chao",
        desc: "Another Japanese",
        img : "nutrition/Restaurants/sushi chao main.JPG",
        type: "res",
        dist: 4
    });
    $scope.list.push({
        id  : 6,
        name: "Wendys",
        desc: "Dollar Menu is great",
        img : "nutrition/Restaurants/wendys main.JPG",
        type: "res",
        dist: 4
    });


    $scope.seeMoreInfo = function(block, id) {
        $scope.moreInfo = block;
        $scope.selEl = id;
    };

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
