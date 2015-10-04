(function(){
  "use strict";
  
  angular
    .module("broker", [])
    .factory("service", service);
  
  function service($http){
   
    var getData = function(){
      return $http.get("/data")
		.then(function(response){
		  return response.data;
		});
    };
    
    return {
      getData: getData 
    };
  }
})();