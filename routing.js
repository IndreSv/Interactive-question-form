var app = angular.module('myApp');


app.config(['$stateProvider', function ($stateProvider) {
       var intro = {
               name: 'intro',
               url: '/',
               templateUrl: 'index.html'
           },
           first = {
               name: 'first',
               url: '/1',
               //parent: intro,
               templateUrl: 'index.html'
           },
           second = {
               name: 'second',
               url: '/2',
               parent: intro,
               templateUrl: 'index.html'
           },
           third = {
               name: 'third',
               url: '/3',
               parent: intro,
               templateUrl: 'index.html'
           };
           fourth = {
               name: 'fourth',
               url: '/4',
               parent: intro,
               templateUrl: 'index.html'
           };
           fith = {
               name: 'fith',
               url: '/5',
               parent: intro,
               templateUrl: 'index.html'
           };
           summary = {
               name: 'summary',
               url: '/summary',
               parent: intro,
               templateUrl: 'index.html'
           };
       $stateProvider.state(intro);
       $stateProvider.state(first);
       $stateProvider.state(second);
       $stateProvider.state(third);
       $stateProvider.state(fourth);
       $stateProvider.state(fith);
       $stateProvider.state(summary);
   }])
