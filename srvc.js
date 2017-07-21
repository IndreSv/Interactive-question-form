angular.module('myApp')
    .factory('storeData', function() {
        var answer1 = '';
        var answer2 = '';

        function setData(a) {
          console.log(a);
answer1 = a;
        }
        return {
            getData: function() {
              return {
                answer1: answer1,
              }
            },
            setData: setData
        }
    })
