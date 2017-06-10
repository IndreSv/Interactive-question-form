var app = angular.module('myApp', []);

app.controller('mainCtrl', ['$scope', function($scope) {
    $scope.showMe = false;
    $scope.myFunc = function() {
        $scope.showMe = ! $scope.showMe;
    }
}]);

// app.controller('answers', function($scope) {
//   var summary = ("");
// });



// TODO:
// - Unhide questions one by one (and hide previous one)
// - Validations (if "next" clicked without choosing option)
// - One dynamic question (question 4)
// - Storing the chosen options
// - Showing everything in summary
