describe("Tests for storing answers", function() {
    var storeDataProviderMock, ctrl;
    beforeEach(function() {
        storeDataProviderMock = {
            answers: {
                set: jasmine.createSpy(),
                get: jasmine.createSpy()
            }
        }
    })
    beforeEach(module('myApp'));

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
            expect(storeDataProviderMock.answers.set).toHaveBeenCalledWith('answer1', 1);
        })
        it('should call set with answer3 parameter', function() {
            $scope.answer3 = "answer3"
            $scope.saveAnswer3();
            expect(storeDataProviderMock.answers.set).toHaveBeenCalledWith('answer3', 3);
        })
        it('should call set with answer4 parameter', function() {
            $scope.answer4 = "answer4"
            $scope.saveAnswer4();
            expect(storeDataProviderMock.answers.set).toHaveBeenCalledWith('answer4', 4);
        })
        it('should call set with answer5 parameter', function() {
            $scope.answer5 = "answer5"
            $scope.saveAnswer5();
            expect(storeDataProviderMock.answers.set).toHaveBeenCalledWith('answer5', 5);
        })
        it('should call the service with answer6 parameter', function() {
            $scope.answer6 = "answer6"
            $scope.saveAnswer6();
            expect(storeDataProviderMock.answers.set).toHaveBeenCalledWith('answer6', 6);
        })
        it('should call getting answers', function() {
            $scope.getAnswer();
            expect(storeDataProviderMock.answers.get).toHaveBeenCalled();
        })
    });
});
