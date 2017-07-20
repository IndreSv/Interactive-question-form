// var CalculatorService = angular.module('CalculatorService', [])
// .service('testService', function () {
//     this.square = function (a) { return a*a};
//     console.log("hello");
//
// });

angular.module('myApp')
    .service('CalculatorService', function() {
    this.square = function (a) { return a*a};
  });
