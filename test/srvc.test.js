describe("Service tests", function() {
    "use strict";
    var service;

    beforeEach(angular.mock.module('myApp'))

    beforeEach(inject(function($injector) {
        service = $injector.get('storeData');
    }));

    describe("service tests", function() {
        it('should set a proper value', function() {
            service.answers.set("Proper value", 1);
            expect(service.answers.get(1)).toEqual("Proper value");
        });
        it('should not accept string as question number', function() {
            expect(service.answers.set("Test", "not a number")).toEqual("wrong parameters");
        });
        it('should not accept string as question number', function() {
            expect(service.answers.set('', 1)).toEqual("wrong parameters");
        });
    });
});
