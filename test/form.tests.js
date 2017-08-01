describe("statesTesting", function() {
    var stateProviderMock, ctrl;
    beforeEach(function() {
        stateProviderMock = jasmine.createSpyObj('stateProvider', ['intro']);
        scopeProviderMock = jasmine.createSpyObj('scope', ['nextq', 'previousq']);
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
        $controller("stateChangeController", {
            $scope: $scope,
            $state: $state
        })
    });

    describe('$scope.nextq', function() {
        it('should be directed to first state', function() {
            spyOn($state, 'go');
            $scope.question1();
            expect($state.go).toHaveBeenCalledWith('first');
        })

        it('should be directed next to second state', function() {
            spyOn($state, 'go');
            $scope.question2();
            expect($state.go).toHaveBeenCalledWith('second');
        })

        it('should be directed to third state', function() {
            spyOn($state, 'go');
            $scope.question3();
            expect($state.go).toHaveBeenCalledWith('third');
        })

        it('should be directed to fourth state', function() {
            spyOn($state, 'go');
            $scope.question4();
            expect($state.go).toHaveBeenCalledWith('fourth');
        })

        it('should be directed to fifth state', function() {
            spyOn($state, 'go');
            $scope.question5();
            expect($state.go).toHaveBeenCalledWith('fifth');
        })
        it('should be directed to final state', function() {
            spyOn($state, 'go');
            $scope.summary();
            expect($state.go).toHaveBeenCalledWith('summary');
        })
    })

})
