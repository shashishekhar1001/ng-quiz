app.controller("list_controller", function($http, $scope, $q, change_quiz_state){
    // Factory instance for controller created
    this.list_controller_factory_instance = change_quiz_state;

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
    };

    //Search based filtering
    $scope.search = "";

    //Hide the turtles information part an then activate the quiz
    this.quiz_active = false;

    //Activate quiz using Factory
    this.activate_quiz = function(){        
        this.quiz_activate = this.list_controller_factory_instance.get_activate_quiz();
        console.log(this.quiz_activate);        
        this.list_controller_factory_instance.set_activate_quiz(true);
        this.quiz_activate = this.list_controller_factory_instance.get_activate_quiz();
        console.log(this.quiz_activate);           
    };
});