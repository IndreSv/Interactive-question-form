describe("firstQ", function() {
    beforeEach(angular.mock.module('myApp'));

    var $controller;

    beforeEach(inject(function(_$controller_) {
        $controller = _$controller_;
    }));

    describe('$scope.nextq', function() {
        it('should direct to the next state', function($state) {
          $state.go('first');
          expect($state).to.equal("first");
        })
    })

})
