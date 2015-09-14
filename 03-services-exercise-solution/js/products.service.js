(function(){

	var productsService = function($http){

		var categoriesSelected = [];

		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						})
		};

		var getCategories = function(){
			return $http.get("data/categories.json")
						.then(function(response){
							return response.data;
						})
		};

		var getCategoriesSelected = function(){
      		return categoriesSelected;
      	}

		var categoryChange = function(category){
			var i = categoriesSelected.indexOf(category);
            if (i > -1) {
                categoriesSelected.splice(i, 1);
            } 
            else {
                categoriesSelected.push(category);
            }

        };

        var productFilter = function(product){
            if (categoriesSelected.length > 0) {
                if (categoriesSelected.indexOf(product.category) < 0){
                    return;
                }
            }
            return product;
        }  


		return {
			getProducts: getProducts,
			getCategories: getCategories,
			productFilter: productFilter,
			categoryChange: categoryChange,
			getCategoriesSelected: getCategoriesSelected
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService); 

}());