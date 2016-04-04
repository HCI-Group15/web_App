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

    // fill the with 10 total samples of recreation
    $scope.list.push({
        name: "Apple Bees",
        desc: "Where all college students chill",
        img : "",
        type: "bar",
        dist: 5
    });
    $scope.list.push({
        name: "Copper Monkey",
        desc: "No, we do not eat monkey",
        img : "",
        type: "bar",
        dist: 2
    });
    $scope.list.push({
        name: "Gator City Sports Grill",
        desc: "No sleep time",
        img : "",
        type: "bar",
        dist: 0.5
    });
    $scope.list.push({
        name: "Grog House Bar & Grill",
        desc: "What is this",
        img : "",
        type: "bar",
        dist: 4
    });
    $scope.list.push({
        name: "Broward Outdoor Complex",
        desc: "Relieve your stress as always",
        img : "",
        type: "rec",
        dist: 0.1
    });
    $scope.list.push({
        name: "Morningside Nature Center",
        desc: "No idea, what is going on",
        img : "",
        type: "rec",
        dist: 4
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
