(function(){

	var productsService = function($http){



		var getProducts = function(){
			return $http.get("data/products.json")
						.then(function(response){
							return response.data;
						})
		};

		var getProduct = function(id){
			return $http.get("data/products.json")
						.then(function(response){
							return findProductInArray(response.data, id);
						})
		}
		
		var findProductInArray = function(data, id){
			return data.filter(function(element){
				if(element.id === id){
					return element;
				}
			});
		}


		return {
			getProducts: getProducts,
			getProduct: getProduct
		}

	}

	angular
		.module("Main")
		.factory("productsService", productsService); 

}());