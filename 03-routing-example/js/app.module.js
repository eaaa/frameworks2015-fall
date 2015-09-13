(function() {
    'use strict';

    angular
        .module('Main', [
        	'ngRoute',
            'Main.products',
            'Main.product'
            ]
        )
        .config(function($routeProvider){
        	$routeProvider
        		.when('/product/:id', {
        			templateUrl: '../view/product.html',
        			controller: 'productController'
        		})
        		.when("/", {
        			templateUrl: '../view/products.html',
        			controller: 'productsController'
        		})
        		.otherwise({ redirectTo: '/' });
        })
}());
