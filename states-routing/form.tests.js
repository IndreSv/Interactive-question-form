describe("statesTesting", function() {
    var stateProviderMock, ctrl;
    beforeEach(function() {
        stateProviderMock = jasmine.createSpyObj('stateProvider', ['intro']);
    })
    beforeEach(module('myApp', function($provide) {
        $provide.value('$stateProvider', stateProviderMock);
    }));
    var $controller;
    var $state;
    var vm;

    beforeEach(inject(function(_$controller_, _$state_) {
        $controller = _$controller_;
        $state = _$state_;
        vm = this;
    }));

    beforeEach(function() {
        $controller("stateChangeController", {
            $state: $state,
            vm: this
        })
    });

    describe('states tests', function() {
        it('should be directed to first state', function() {
            spyOn($state, 'go');
            vm.question1();
            expect($state.go).toHaveBeenCalledWith('first');
        })

        it('should be directed next to second state', function() {
            spyOn($state, 'go');
          vm.question2();
            expect($state.go).toHaveBeenCalledWith('second');
        })

        it('should be directed to third state', function() {
            spyOn($state, 'go');
            vm.question3();
            expect($state.go).toHaveBeenCalledWith('third');
        })

        it('should be directed to fourth state', function() {
            spyOn($state, 'go');
            vm.question4();
            expect($state.go).toHaveBeenCalledWith('fourth');
        })

        it('should be directed to fifth state', function() {
            spyOn($state, 'go');
            vm.question5();
            expect($state.go).toHaveBeenCalledWith('fifth');
        })
        it('should be directed to final state', function() {
            spyOn($state, 'go');
            vm.summary();
            expect($state.go).toHaveBeenCalledWith('summary');
        })
    })

})
