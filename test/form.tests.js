describe("firstQ", function() {
    var stateProviderMock, ctrl;
    beforeEach(function() {
        stateProviderMock = jasmine.createSpyObj('stateProvider', ['intro']);
        scopeProviderMock = jasmine.createSpyObj('scope', ['nextq']);
    })
    beforeEach(module('myApp', function($provide) {
        $provide.value('$stateProvider', stateProviderMock);
    }));
    var $controller;
    var $state;
    var $scope;

    beforeEach(inject(function(_$controller_, _$state_, _$rootScope_) {
        $controller = _$controller_;
        $state = _$state_;
        $scope = _$rootScope_.$new();
    }));

    beforeEach(function() {
      ctrl = $controller("firstQ", {
        $scope: $scope,
        $state: $state
      });
    })

    describe('$scope.nextq', function() {
        it('should be directed tofirst state', function() {
            spyOn($state, 'go');
            $scope.nextq();
                expect($state.go).toHaveBeenCalledWith('first');
            })

        })
})
