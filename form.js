var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope) {
    $scope.test = function() {
        console.log("Hello there! This the helloWorld controller function, in the mainCtrl!");
    }
};);
