var app = angular.module('myApp', ['ui.router']);


app.controller('mainCtrl', function($scope, $state) {
  $scope.tabs = ['intro', 'first', 'second', 'third', 'fourth', 'fith', 'summary'];
  $scope.currentIndex = -1;
$scope.nextq = function () {
  $scope.currentIndex = $scope.currentIndex+1;
  var name = $scope.tabs[$scope.currentIndex];
  $state.go(name);
}
});


app.controller('check', function MyCtrl($scope) {
  $scope.value = "none" ;
  $scope.isChecked = false;
  $scope.checkStuff = function () {
      $scope.isChecked = !$scope.isChecked;
  }
});

// TODO:
// - Unhide questions one by one (and hide previous one)
// - Validations (if "next" clicked without choosing option)
// - One dynamic question (question 4)
// - Storing the chosen options
// - Showing everything in summary
