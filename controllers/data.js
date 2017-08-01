angular.module("myApp").controller("answersStorageController", answersStorageController);

answersStorageController.$inject = [
    "$scope",
    "storeData"
];

function answersStorageController($scope, storeData) {
    $scope.countries = [{
        europe: false,
        asia: false,
        africa: false,
        southamerica: false,
        northamerica: false
    }]

    $scope.saveAnswer1 = function() {
        storeData.answer1.set($scope.answer1);
    };
    $scope.saveAnswer2 = function() {
        if (europe.true) {
            ($scope.answer2.push(europe));
        }
        if (asia.true) {
            ($scope.answer2.push(asia));
        }
        if (africa.true) {
            ($scope.answer2.push(africa));
        }
        if (southamerica.true) {
            ($scope.answer2.push(southAmerica));
        }
        if (northamerica.true) {
            ($scope.answer2.push(northAmerica));
        }
        storeData.answer2.set(Object.keys($scope.answer2));
    };
    $scope.saveAnswer3 = function() {
        storeData.answer3.set($scope.answer3);
    };
    $scope.saveAnswer4 = function() {
        storeData.answer4.set($scope.answer4);
    };
    $scope.saveAnswer5 = function() {
        storeData.answer5.set($scope.answer5);
    };
    $scope.saveAnswer6 = function() {
        storeData.answer6.set($scope.answer6);
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
