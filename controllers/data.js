angular.module("myApp").controller("newctrl", newController);

newController.$inject = [
  "$scope",
  "storeData"
];

function newController($scope, storeData) {
  $scope.saveAnswer = function() {
      storeData.setData($scope.answer1);
      console.log($scope.answer1);
  }
   }


// function newController($scope, CalculatorService) {
//   $scope.findSquare = function () {
//      $scope.answer = CalculatorService.square($scope.number);
//    }
// }
