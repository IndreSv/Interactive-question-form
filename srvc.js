angular.module('myApp').factory('storeData', StoreDataService);

function StoreDataService() {
    var answer1;
var answer2;
var answer3;
var answer4;
var answer5
    return {
        answer1: {
            set: function(newValue) {
                answer1 = newValue;
            },
            get: function() {
                return answer1;
            }
        },
        answer2: {
            set: function(newValue) {
                answer2 = newValue
            },
            get: function() {
                return answer2;
            }
        },
        answer3: {
            set: function(newValue) {
                answer3 = newValue;
            },
            get: function() {
                return answer3;
            }
        },
        answer4: {
            set: function(newValue) {
                answer4 = newValue;
            },
            get: function() {
                return answer4;
            }
        },
        answer5: {
            set: function(newValue) {
                answer5 = newValue;
            },
            get: function() {
                return answer5;
            }
        },
        answer6: {
            set: function(newValue) {
                answer6 = newValue;
            },
            get: function() {
                return answer6;
            }
        }
    }
}
