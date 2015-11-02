(function(){
	'use strict';

	angular
		.module('AppUsers', [])
		.controller('usersController', usersController);

	function usersController($http, $scope){
		$http.get('/api/users')
			.then(function(response){
				$scope.users = response.data;
			});
	}

}());