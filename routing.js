var app = angular.module('myApp');


app.config(function($stateProvider) {
    $stateProvider
        .state('intro', {
            url: '/',
            templateUrl: 'index.html',
        })
        .state('first', {
            url: '/1',
            templateUrl: 'q1.html',
        })
        .state('second', {
            url: '/2',
            templateUrl: 'q2.html',
        })
        .state('third', {
            url: '/3',
            templateUrl: 'q3.html'
        })
        .state('fourth', {
            url: '/4',
            templateUrl: 'q4.html'
        })
        .state('fith', {
            url: '/5',
            templateUrl: 'q5.html'
        })
        .state('summary', {
            url: '/summary',
            templateUrl: 'summary.html'
        })
})
