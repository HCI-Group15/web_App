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
    $scope.list = [];
    $scope.default = "rec";
    $scope.pageId = 0;
    $scope.moreInfo = false;
    $scope.selEl = 0;

    // fill the with 10 total samples of recreation
    $scope.list.push({
        id  : 0,
        name: "AppleBees",
        desc: "Where all college students chill",
        img : "img/apple_bees.png",
        type: "bar",
        dist: 5
    });
    $scope.list.push({
        id  : 1,
        name: "Copper Monkey",
        desc: "No, we do not eat monkey",
        img : "img/copper_monkey.jpg",
        type: "bar",
        dist: 2
    });
    $scope.list.push({
        id  : 2,
        name: "Gator City Sports Grill",
        desc: "No sleep time",
        img : "img/gator_city.png",
        type: "bar",
        dist: 0.5
    });
    $scope.list.push({
        id  : 3,
        name: "Grog House Bar & Grill",
        desc: "What is this",
        img : "img/grog_house.png",
        type: "bar",
        dist: 4
    });
    $scope.list.push({
        id  : 4,
        name: "Broward Outdoor Complex",
        desc: "Relieve your stress as always",
        img : "img/broward.jpeg",
        type: "rec",
        dist: 0.1
    });
    $scope.list.push({
        id  : 5,
        name: "Morningside Nature Center",
        desc: "No idea, what is going on",
        img : "img/morning_side.jpg",
        type: "rec",
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
