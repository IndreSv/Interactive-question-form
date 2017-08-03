angular.module("myApp").controller("answersStorageController", answersStorageController);

answersStorageController.$inject = [
    "$scope",
    "storeData",
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
        storeData.answers.set($scope.answer1, 1);
    };
    $scope.saveAnswer2 = function() {
        for (var key in $scope.countries) {
            if ($scope.countries[key] === true) {
                storeData.answers.set(Object.keys($scope.countries), 2);
            }
        }
    };
    $scope.saveAnswer3 = function() {
        storeData.answers.set($scope.answer3, 3);
    };
    $scope.saveAnswer4 = function() {
        storeData.answers.set($scope.answer4, 4);
    };
    $scope.saveAnswer5 = function() {
        storeData.answers.set($scope.answer5, 5);
    };
    $scope.saveAnswer6 = function() {
        storeData.answers.set($scope.answer6, 6);
    };
    $scope.getAnswer1 = function() {
        var answer1 = storeData.answers.get(1);
        $scope.answer1 = answer1;

    };
    $scope.getAnswer2 = function() {
        var answer2 = storeData.answers.get(2);
        $scope.answer2 = answer2;
    };
    $scope.getAnswer3 = function() {
        var answer3 = storeData.answers.get(3);
        $scope.answer3 = answer3;
    };
    $scope.getAnswer4 = function() {
        var answer4 = storeData.answers.get(4);
        $scope.answer4 = answer4;
    };
    $scope.getAnswer5 = function() {
        var answer5 = storeData.answers.get(5);
        $scope.answer5 = answer5;
    };
    $scope.getAnswer6 = function() {
        var answer6 = storeData.answers.get(6);
        $scope.answer6 = answer6;
    };
}
