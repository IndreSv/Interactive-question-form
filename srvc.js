angular.module('myApp')
    .factory('storeData', function() {
        var answer1 = '';

        function setData(a) {
          console.log(a);
answer1 = a;
        }
        return {
            getData: function() {
              return {
                answer1: answer1
              }
            },
            setData: setData
        }
    })


  //  angular.module('myApp')
  //      .factory('storeData', function() {
  //          var answer1 = 'tiu';
  //          return {
  //              getData: getData,
  //              setData: setData
  //          };
   //
  //          function getData() {
  //              return answer1;
  //          }
   //
  //          function setData(value) {
  //              answer1 = value;
  //          }
  //      })
