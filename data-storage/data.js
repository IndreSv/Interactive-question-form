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
    $scope.getAnswer = function() {
        $scope.summary = [];
        for (i = 1; i < 7; i++) {
            var answer = storeData.answers.get(i);
            $scope.answer = answer;
            $scope.summary.push($scope.answer);
        };
    };
}
