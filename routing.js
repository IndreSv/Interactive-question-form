var app = angular.module('myApp');


app.config(function($stateProvider) {
    $stateProvider
        .state('intro', {
            url: '',
            templateUrl: 'templates/intro.html',
        })
        .state('first', {
            url: '/1',
            templateUrl: 'templates/q1.html',
        })
        .state('second', {
            url: '/2',
            templateUrl: 'templates/q2.html',
        })
        .state('third', {
            url: '/3',
            templateUrl: 'templates/q3.html'
        })
        .state('fourth', {
            url: '/4',
            templateUrl: 'templates/q4.html'
        })
        .state('fith', {
            url: '/5',
            templateUrl: 'templates/q5.html'
        })
        .state('summary', {
            url: '/summary',
            templateUrl: 'templates/summary.html'
        })
        .state('additionalQ', {
            url: '/6',
            templateUrl: 'templates/additional.html'
        })
})
