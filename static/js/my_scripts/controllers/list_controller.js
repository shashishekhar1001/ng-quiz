app.controller("list_controller", function($http, $scope, $q){
    // Get Json data from the server
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

    //Modal to show the turtle details
    this.active_turtle = {};
    this.show_details = function(obj){
        this.active_turtle = obj;
        console.log("Show Details.");
        console.log(this.active_turtle);
    };

    //Search based filtering
    $scope.search = "";

    //Hide the turtles information part an then activate the quiz
    this.quiz_active = false;

    this.activate_quiz = function(){
        this.quiz_active = true;
    };
});