var app = angular.module('myApp');


app.config(function($stateProvider) {
    $stateProvider
        .state('intro', {
            url: '/',
            templateUrl: 'index.html'
        })
        .state('first', {
            url: '/1',
            templateUrl: 'index.html'
        })
        .state('second', {
            url: '/2',
            templateUrl: 'index.html'
        })
        .state('third', {
            url: '/3',
            templateUrl: 'index.html'
        })
        .state('fourth', {
            url: '/4',
            templateUrl: 'index.html'
        })
        .state('fith', {
            url: '/5',
            templateUrl: 'index.html'
        })
        .state('summary', {
            url: '/summary',
            templateUrl: 'index.html'
        })
})
