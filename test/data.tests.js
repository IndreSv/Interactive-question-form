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
            },
            answer4: {
                set: jasmine.createSpy(),
                get: jasmine.createSpy()
            },
            answer5: {
                set: jasmine.createSpy(),
                get: jasmine.createSpy()
            },
            answer6: {
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
            $scope.getAnswer1();
            // expect(storeDataProviderMock.answer1.get).toHaveBeenCalledWith('answer1');

        })
        it('should call the service with answer3 parameter', function() {
            $scope.answer3 = "answer3"
            $scope.saveAnswer3();
            expect(storeDataProviderMock.answer3.set).toHaveBeenCalledWith('answer3');
        })
        it('should call the service with answer4 parameter', function() {
            $scope.answer4 = "answer4"
            $scope.saveAnswer4();
            expect(storeDataProviderMock.answer4.set).toHaveBeenCalledWith('answer4');
        })
        it('should call the service with answer5 parameter', function() {
            $scope.answer5 = "answer5"
            $scope.saveAnswer5();
            expect(storeDataProviderMock.answer5.set).toHaveBeenCalledWith('answer5');
        })
        it('should call the service with answer6 parameter', function() {
            $scope.answer6 = "answer6"
            $scope.saveAnswer6();
            expect(storeDataProviderMock.answer6.set).toHaveBeenCalledWith('answer6');
        })
    });
});
