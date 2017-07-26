// angular.module("myApp").controller("newctrl", newController);
//
// newController.$inject = [
//   "$scope",
//   "storeData"
// ];
//
// function newController($scope, storeData) {
//   $scope.saveAnswer = function() {
//      storeData.setData($scope.answer1);
//   }
//   $scope.getAnswer = function() {
//     $scope.answer1 = storeData.getData();
//   }
//    }

angular.module("myApp").controller("newctrl", newController);

newController.$inject = [
    "$scope",
    "storeData"
];

function newController($scope, storeData) {
$scope.answer2 = {
  value1: false,
  value2: false,
  value3: false,
  value4: false,
  value5: false
}

    $scope.saveAnswer1 = function() {
        storeData.answer1.set($scope.answer1);
        console.log($scope.answer1);
    };
    $scope.saveAnswer2 = function() {
        storeData.answer2.set($scope.answer2);
        console.log($scope.answer2);
    };
    $scope.saveAnswer3 = function() {
        storeData.answer3.set($scope.answer3);
        console.log($scope.answer3);
    };
    $scope.saveAnswer4 = function() {
        storeData.answer4.set($scope.answer4);
        console.log($scope.answer4);
    };
    $scope.saveAnswer5 = function() {
        storeData.answer5.set($scope.answer5);
        console.log($scope.answer5);
    };
    $scope.saveAnswer6 = function() {
        storeData.answer6.set($scope.answer6);
        console.log($scope.answer6);
    };
    $scope.getAnswer1 = function() {
        var answer1 = storeData.answer1.get();
        $scope.answer1 = answer1;
    };
    $scope.getAnswer2 = function() {
        var answer2 = storeData.answer2.get();
        $scope.answer2 = answer2;
    };
    $scope.getAnswer3 = function() {
        var answer3 = storeData.answer3.get();
        $scope.answer3 = answer3;
    };
    $scope.getAnswer4 = function() {
        var answer4 = storeData.answer4.get();
        $scope.answer4 = answer4;
    };
    $scope.getAnswer5 = function() {
        var answer5 = storeData.answer5.get();
        $scope.answer5 = answer5;
    };
    $scope.getAnswer6 = function() {
        var answer6 = storeData.answer6.get();
        $scope.answer6 = answer6;
    };
}
