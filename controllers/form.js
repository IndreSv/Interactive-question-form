var app = angular.module('myApp', ['ui.router']);

app.controller('stateChangeController', function($scope, $state) {
    $scope.question1 = function() {
        $state.go('first');
    };
    $scope.question2 = function() {
        $state.go('second');
    };
    $scope.question3 = function() {
        $state.go('third');
    };
    $scope.question4 = function() {
        $state.go('fourth');
    };
    $scope.question5 = function() {
        $state.go('fifth');
    };
    $scope.dynamicQ = function() {
        var firstOption = document.getElementById("firstOption");
        var secondOption = document.getElementById("secondOption");
        if (firstOption.checked) {
            $state.go('additionalQ');
        } else {
            $state.go('summary');
        }
    };
    $scope.summary = function() {
        $state.go('summary');
    }
});
