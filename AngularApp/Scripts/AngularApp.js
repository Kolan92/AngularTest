var AngularApp = angular.module('AngularApp', ['ngRoute']);

AngularApp.controller('LandingPageController', LandingPageController);

var configFunction = function($routeProvider) {
    $routeProvider
        .when('/routeOne', {
            templateUrl: 'routes/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function(parms) {
                return 'routes/two?donuts=' +parms.donuts;}
            })
        .when('/routeThree', {
            templateUrl: 'routes/three'
        });
}

configFunction.$inject = ['$routeProvider'];

AngularApp.config(configFunction)