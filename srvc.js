angular.module('myApp').factory('storeData', StoreDataService);

function StoreDataService() {
    var answers = {
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
        answer5: '',
        answer6: ''
    }
    return {
        answers: {
            set: function(newValue, number) {
                answers["answer" + number] = newValue;
            },
            get: function(number) {
                return (answers['answer' + number]);
            }
        }
    }
}
