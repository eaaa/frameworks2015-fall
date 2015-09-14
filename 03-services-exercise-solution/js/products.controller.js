(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($scope, productsService){
		
		var modelProducts = function(data){
			$scope.products = data;
		}

		var modelCategories = function(data){
			$scope.categories = data;
		}

		productsService.getProducts()
			.then(modelProducts);

		productsService.getCategories()
			.then(modelCategories);

		var updateCategoriesSelected = function(){
			$scope.categoriesSelected = productsService.getCategoriesSelected();
		}

		$scope.productFilter = function(product){
			return productsService.productFilter(product);
		}

		$scope.categoryChange = function(category){
			productsService.categoryChange(category);
			updateCategoriesSelected();
		}

		updateCategoriesSelected();

	}

}());