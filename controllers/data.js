angular.module("myApp").controller("newctrl", newController);

newController.$inject = [
  "$scope",
  "storeData"
];

function newController($scope, storeData) {
  $scope.saveAnswer = function() {
     storeData.setData($scope.answer1);
  }
  $scope.getAnswer = function() {
    $scope.answer1 = storeData.getData();
  }
   }
