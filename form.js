var app = angular.module('myApp', ['ui.router']);

// app.controller('mainCtrl', ['$scope', function($scope) {
//     $scope.showMe = false;
//     $scope.myFunc = function() {
//         $scope.showMe = ! $scope.showMe;
//     }
// }]);

app.controller('mainCtrl', function($scope, $state) {
  $scope.tabs = ['intro', 'first', 'second', 'third', 'fourth', 'fith', 'summary'];
  $scope.currentIndex = -1;
  $scope.maxIndex = $scope.tabs.length;
$scope.nextq = function () {
  $scope.currentIndex = $scope.currentIndex+1;
  var name = $scope.tabs[$scope.currentIndex];
  $state.go( name );
}
});

// TODO:
// - Unhide questions one by one (and hide previous one)
// - Validations (if "next" clicked without choosing option)
// - One dynamic question (question 4)
// - Storing the chosen options
// - Showing everything in summary
