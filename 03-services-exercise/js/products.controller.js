(function(){

	angular
		.module("Main.products", [])
		.controller("productsController", productsController);

	function productsController($http, $scope){

		var categoriesSelected = [];
		
		$http.get("data/products.json").then(function(response){
			$scope.products = response.data;
		});

		$http.get("data/categories.json").then(function(response){
			$scope.categories = response.data;
		});

		$scope.productFilter = function(product){
			if (categoriesSelected.length > 0) {
                if (categoriesSelected.indexOf(product.category) < 0){
                    return;
                }
            }
            return product;
		}

		$scope.categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }
			$scope.categoriesSelected = categoriesSelected;
		}

	}

}());