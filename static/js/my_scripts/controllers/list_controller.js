(function(){
    angular
        .module("turtle_facts")
        .controller("list_controller", function($http, $scope, $q){
            $http({
                method : "GET",
                url : "/api/turtles/"
            }).then(function mySuccess(response) {
                $scope.data = response.data;
                console.log($scope.data);
            }, function myError(response) {
                $scope.error = response.statusText;         
                console.log("Error");       
            });
        });
})();