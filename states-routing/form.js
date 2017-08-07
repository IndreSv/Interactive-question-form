
angular.module('myApp').controller('stateChangeController', function($state) {
var vm = this;
    vm.question1 = function() {
        $state.go('first');
    };
    vm.question2 = function() {
        $state.go('second');
    };
    vm.question3 = function() {
        $state.go('third');
    };
    vm.question4 = function() {
        $state.go('fourth');
    };
    vm.question5 = function() {
        $state.go('fifth');
    };
    vm.dynamicQ = function() {
        var firstOption = document.getElementById("firstOption");
        var secondOption = document.getElementById("secondOption");
        if (firstOption.checked) {
            $state.go('additionalQ');
        } else {
            $state.go('summary');
        }
    };
    vm.summary = function() {
        $state.go('summary');
    }
});
