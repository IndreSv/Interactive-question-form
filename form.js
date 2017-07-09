var app = angular.module('myApp', ['ui.router']);


app.controller('mainCtrl', function($scope, $state) {
    $scope.tabs = ['intro', 'first', 'second', 'third', 'fourth', 'fith', 'summary'];
    $scope.currentIndex = -1;
    $scope.nextq = function() {
        $scope.currentIndex = $scope.currentIndex + 1;
        var name = $scope.tabs[$scope.currentIndex];
        $state.go(name);
    }
});


app.directive('check', function() {
    return {
        controller: function($scope) {
            $scope.value = "none";
            $scope.isChecked = false;
            $scope.checkStuff = function() {
                $scope.isChecked = !$scope.isChecked;
            }
        }
    };
});

//try this: https://docs.angularjs.org/api/ng/directive/ngValue ?

// app.controller('Add', function(){
//    var vm = this;
//    vm.answers = [];
//    vm.Add = function() {
//      vm.answers.push({value});
//      console.log(vm.answers);
//    }
// });

            // TODO:
            // - Unhide questions one by one (and hide previous one)
            // - Validations (if "next" clicked without choosing option)
            // - One dynamic question (question 4)
            // - Storing the chosen options
            // - Showing everything in summary
