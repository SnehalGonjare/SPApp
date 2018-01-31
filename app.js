var myApp = angular.module('SPApp', ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider
        //new state added for home page        
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl'
        })

        //new state added for home page        
        .state('landing', {
            url: '/landing',
            templateUrl: 'views/landing.html',
            controller: 'landingCtrl'
        })
});

