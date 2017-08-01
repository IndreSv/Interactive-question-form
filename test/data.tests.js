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
        ctrl = $controller("answersStorageController", {
            $scope: $scope,
            storeData: storeDataProviderMock
        });
    });
    describe('answer tests', function() {
        it('should call set with answer1 parameter', function() {
            $scope.answer1 = "answer1"
            $scope.saveAnswer1();
            expect(storeDataProviderMock.answer1.set).toHaveBeenCalledWith('answer1');
        })
        it('should call get for answer1', function() {
            $scope.getAnswer1();
            expect(storeDataProviderMock.answer1.get).toHaveBeenCalled();
        })
        // it('should call set with answer2 parameters', function() {
        //     $scope.answer2 = "answer2"
        //     var europe = "europe";
        //     var asia = 'asia';
        //     var africa = 'africa';
        //     var southAmerica = 'soutamerica';
        //     var northAmerica = 'northamerica'
        //     europe.checked;
        //     asia.checked;
        //     africa.checked;
        //     southAmerica.checked;
        //     northAmerica.checked;
        //     $scope.saveAnswer2();
        //     expect(storeDataProviderMock.answer2.push).toHaveBeenCalled();
        // })
        it('should call set with answer3 parameter', function() {
            $scope.answer3 = "answer3"
            $scope.saveAnswer3();
            expect(storeDataProviderMock.answer3.set).toHaveBeenCalledWith('answer3');
        })
        it('should call get for answer3', function() {
            $scope.getAnswer3();
            expect(storeDataProviderMock.answer3.get).toHaveBeenCalled();
        })
        it('should call set with answer4 parameter', function() {
            $scope.answer4 = "answer4"
            $scope.saveAnswer4();
            expect(storeDataProviderMock.answer4.set).toHaveBeenCalledWith('answer4');
        })
        it('should call get for answer4', function() {
            $scope.getAnswer4();
            expect(storeDataProviderMock.answer4.get).toHaveBeenCalled();
        })
        it('should call set with answer5 parameter', function() {
            $scope.answer5 = "answer5"
            $scope.saveAnswer5();
            expect(storeDataProviderMock.answer5.set).toHaveBeenCalledWith('answer5');
        })
        it('should call get for answer5', function() {
            $scope.getAnswer5();
            expect(storeDataProviderMock.answer5.get).toHaveBeenCalled();
        })
        it('should call the service with answer6 parameter', function() {
            $scope.answer6 = "answer6"
            $scope.saveAnswer6();
            expect(storeDataProviderMock.answer6.set).toHaveBeenCalledWith('answer6');
        })
        it('should call get for answer6', function() {
            $scope.getAnswer6();
            expect(storeDataProviderMock.answer6.get).toHaveBeenCalled();
        })
    });
});
