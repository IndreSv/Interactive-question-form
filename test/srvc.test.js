// describe("Service tests", function() {
//   var serviceProviderMock, storeData;
//   describe("storeData", function() {
//
//     beforeEach(function() {
//       serviceProviderMock = jasmine.createSpyObj('storeData', ['StoreDataService']);
//     });
//
//         beforeEach(function() {
//             angular.module('myApp', function($provide) {
//               var storeData;
//               $provide.value('storeData', serviceProviderMock);
//             });
//         });
//
//         beforeEach(inject(function (_storeData_) {
//             storeData = _storeData_;
//         }));
//
//         it('should contain a storeData service',
//            inject(function(storeData) {
//                 expect(storeData).toBeDefined();
//         }));
//    });
// })
