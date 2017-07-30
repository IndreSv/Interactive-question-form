describe("Tests for storing answers", function() {
    var storeDataProviderMock, ctrl;
    beforeEach(function() {
        storeDataProviderMock = {
            answer1: {
                set: jasmine.createSpy(),
                get: jasmine.createSpy()
            },
            answer3: {
              set: jasmine.createSpy(),
              get: jasmine.createSpy()
            }
        }
    })
    beforeEach(module('myApp', function($provide) {}));
    var $controller;
    var $state;
    var $scope;


    beforeEach(inject(function(_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $scope = _$rootScope_.$new();
    }));

    beforeEach(function() {
        ctrl = $controller("answersStorage", {
            $scope: $scope,
            storeData: storeDataProviderMock
        });
    });
    describe('$scope.saveAnswer1', function() {
        it('should call the service with answer1 parameter', function() {
            $scope.answer1 = "answer1"
            $scope.saveAnswer1();
            expect(storeDataProviderMock.answer1.set).toHaveBeenCalledWith('answer1');
        })
        it('should call the service with answer3 parameter', function() {
            $scope.answer3 = "answer3"
            $scope.saveAnswer3();
            expect(storeDataProviderMock.answer3.set).toHaveBeenCalledWith('answer3');
        })
    });
});
