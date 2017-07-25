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
    $scope.saveAnswer1 = function() {
        storeData.answer1.set($scope.answer1);
        console.log($scope.answer1);
    };
    $scope.saveAnswer2 = function() {
        storeData.answer2.set($scope.answer2);
        console.log($scope.answer2);
    };
    $scope.getAnswer1 = function() {
        var answer1 = storeData.answer1.get();
        $scope.answer1 = answer1;
    };
    $scope.getAnswer2 = function() {
        var answer2 = storeData.answer2.get();
        $scope.answer2 = answer2;
    };
}
