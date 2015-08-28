(function(){

	angular
		.module("app", [])
		.controller("appController", appController)
		.factory("appService", appService);

	
	function appController($scope, appService){
		appService.getHello().then(function(data){
			$scope.message = data.message;
		});
	}

	function appService($http){

		var getHello = function(){
				return $http.get("/hello")
				.then(function(response){
					return response.data;
				});
		};

		return {
			getHello: getHello
		};
	}


})();