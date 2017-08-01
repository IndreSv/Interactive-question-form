var app = angular.module('myApp', ['ui.router']);

app.controller('firstQ', function($scope, $state) {
    $scope.nextq = function() {
        $state.go('first');
    }
});

app.controller('secondQ', function($scope, $state) {
    $scope.nextq = function() {
        $state.go('second');
    }
});

app.controller('thirdQ', function($scope, $state) {
    $scope.nextq = function() {
        $state.go('third');
    }
    $scope.previousq = function() {
        $state.go('first');
    }
});

app.controller('fourthQ', function($scope, $state) {
    $scope.nextq = function() {
        $state.go('fourth');
    }
    $scope.previousq = function() {
        $state.go('second');
    }
});

app.controller('fifthQ', function($scope, $state) {
    $scope.nextq = function() {
        $state.go('fith');
    }
    $scope.previousq = function() {
        $state.go('third');
    }
});

app.controller('dynamicQ', function($scope, $state) {
    $scope.nextq = function() {
        var firstOption = document.getElementById("firstOption");
        var secondOption = document.getElementById("secondOption");
        if (firstOption.checked) {
            $state.go('additionalQ');
        } else {
            $state.go('summary');
        }
    }
    $scope.previousq = function() {
        $state.go('fourth');
    }
});

app.controller('summaryView', function($scope, $state) {
    $scope.nextq = function() {
        $state.go('summary');
    }
    $scope.previousq = function() {
        $state.go('fith');
    }
});

// TODO:
// - Validations (if "next" clicked without choosing option)
// - One dynamic question (question 4)
// - Storing the chosen options
// - Showing everything in summary
