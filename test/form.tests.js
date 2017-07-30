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

    describe('$scope.nextq', function() {
        it('should be directed to first state', function() {
            ctrl = $controller("firstQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.nextq();
            expect($state.go).toHaveBeenCalledWith('first');
        })


        it('should be directed next to second state', function() {
            ctrl = $controller("secondQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.nextq();
            expect($state.go).toHaveBeenCalledWith('second');
        })


        it('should be directed back to first state', function() {
            ctrl = $controller("thirdQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.previousq();
            expect($state.go).toHaveBeenCalledWith('first');
        })
        it('should be directed to third state', function() {
            ctrl = $controller("thirdQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.nextq();
            expect($state.go).toHaveBeenCalledWith('third');
        })
        it('should be directed back to second state', function() {
            ctrl = $controller("fourthQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.previousq();
            expect($state.go).toHaveBeenCalledWith('second');
        })

        it('should be directed to fourth state', function() {
            ctrl = $controller("fourthQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.nextq();
            expect($state.go).toHaveBeenCalledWith('fourth');
        })
        it('should be directed back to third state', function() {
            ctrl = $controller("fifthQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.previousq();
            expect($state.go).toHaveBeenCalledWith('third');
        })

        it('should be directed to fith state', function() {
            ctrl = $controller("fifthQ", {
                $scope: $scope,
                $state: $state
            });
            spyOn($state, 'go');
            $scope.nextq();
            expect($state.go).toHaveBeenCalledWith('fith');
        })

    })
    it('should be directed back to fith state', function() {
        ctrl = $controller("dynamicQ", {
            $scope: $scope,
            $state: $state
        });
        spyOn($state, 'go');
        $scope.previousq();
        expect($state.go).toHaveBeenCalledWith('fourth');
    })
    it('should be directed to final state', function() {
        ctrl = $controller("summaryView", {
            $scope: $scope,
            $state: $state
        });
        spyOn($state, 'go');
        $scope.nextq();
        expect($state.go).toHaveBeenCalledWith('summary');
    })

})
