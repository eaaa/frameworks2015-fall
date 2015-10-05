(function(){
    "use strict";
    
    angular
        .module("broker")
        .controller("controller", controller);
    
    function controller($scope, service){
        $scope.message = "hello world from angular";
      $scope.data = service.getData()
        .then(function(data){
          $scope.data = data;
      });
    }
})();