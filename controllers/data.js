angular.module("myApp").controller("newctrl", newController);

newController.$inject = [
  "$scope",
  "CalculatorService"
];

function newController($scope, CalculatorService) {
  $scope.findSquare = function () {
     $scope.answer = CalculatorService.square($scope.number);
   }
}



// app.controller("add", ['sharedList', function(sharedList) {
//   var vm = this;
//   vm.text = "";
//   vm.addAnswer = function() {
//     // Stuff the item into the shared list
//     sharedList.addItem(vm.text);
//     vm.text = "";
//   }
// }]);

// app.controller("getInfo", ['sharedList', function(sharedList) {
//   var vm = this;
//   // Read the data
//   vm.listItems = sharedList.getList();
// }]);

//
// app.directive('check', function() {
//     return {
//         controller: function($scope) {
//             $scope.value = "none";
//             $scope.isChecked = false;
//             $scope.checkStuff = function() {
//                 $scope.isChecked = !$scope.isChecked;
//             }
//         }
//     };
// });

//try this: https://docs.angularjs.org/api/ng/directive/ngValue ?

// app.controller('Add', function(){
//    var vm = this;
//    vm.answers = [];
//    vm.Add = function() {
//      vm.answers.push({value});
//      console.log(vm.answers);
//    }
// });
