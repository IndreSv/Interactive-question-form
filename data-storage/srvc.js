angular.module('myApp').factory('storeData', StoreDataService);

function StoreDataService() {
    var answers = {
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
        6: ''
    }
    return {
        answers: {
            set: function(newValue, number) {
                if (isNaN(number) || newValue === '') {
                    throw "wrong parameters";
                } else {
                    answers[number] = newValue;
                };
            },
            get: function(number) {
                return (answers[number]);
            }
        }
    }
}
