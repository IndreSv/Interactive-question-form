angular.module("myApp").config(function($stateProvider) {
    $stateProvider
        .state('intro', {
            url: '',
            templateUrl: 'templates/intro.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('first', {
            url: '/1',
            templateUrl: 'templates/q1.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('second', {
            url: '/2',
            templateUrl: 'templates/q2.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('third', {
            url: '/3',
            templateUrl: 'templates/q3.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('fourth', {
            url: '/4',
            templateUrl: 'templates/q4.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('fifth', {
            url: '/5',
            templateUrl: 'templates/q5.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('summary', {
            url: '/summary',
            templateUrl: 'templates/summary.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('additionalQ', {
            url: '/6',
            templateUrl: 'templates/additional.html',
            controller: 'stateChangeController',
            controllerAs: 'vm'
        })
        .state('questions', {
          url: '/questions',
          templateUrl: 'templates/questions.html'
        })
})
