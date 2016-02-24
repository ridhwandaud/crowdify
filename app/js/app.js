'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    .config(function($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            });
        $routeProvider.when('/main',
            {
                templateUrl:'templates/main.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController'
            });
        $routeProvider.when('/profile',
            {
                templateUrl: 'templates/EditProfile.html',
                controller: 'EditProfileController'
            });
        $routeProvider.when('/event/:eventId',
            {   
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController'
            });
        $routeProvider.when('/user',
            {
                templateUrl: 'templates/UserList.html',
                controller: 'UserListController'
            });
        $routeProvider.when('/sample',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'UserListController'
            });
        $routeProvider.otherwise({redirectTo: '/main'});

    });
