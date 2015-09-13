(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		productsService.getProducts()
			.then(modelProducts);

	}

}());