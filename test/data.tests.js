describe("Tests for storing answers", function() {
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
    var firstOption;

    beforeEach(inject(function(_$controller_, _$state_, _$rootScope_) {
        $controller = _$controller_;
        $state = _$state_;
        $scope = _$rootScope_.$new();
    }));

    beforeEach(function() {
        ctrl = $controller("answersStorage", {
            $scope: $scope,
            $state: $state
        });)
