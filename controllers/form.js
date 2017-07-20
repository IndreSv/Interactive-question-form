// require('./srvc.js');
var app = angular.module('myApp', ['ui.router']);

app.controller('mainCtrl', function($scope, $state) {
    $scope.tabs = ['intro', 'first', 'second', 'third', 'fourth', 'fith', 'summary'];
    $scope.currentIndex = 0;
    $scope.nextq = function() {
        $scope.currentIndex = $scope.currentIndex + 1;
        var name = $scope.tabs[$scope.currentIndex];
        $state.go(name);
    }
});



// TODO:
// - Validations (if "next" clicked without choosing option)
// - One dynamic question (question 4)
// - Storing the chosen options
// - Showing everything in summary
