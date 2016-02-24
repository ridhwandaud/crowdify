'use strict';

eventsApp.controller('UserListController',
    function UserListController($scope, userData,$http,$log) {
	     $http.get('data/'+'user/' + '1.json').success(function(data) 
	      {
	          $scope.users = data;
	      });
	}
);