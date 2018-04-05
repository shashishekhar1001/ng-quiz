app.controller("list_controller", function($http, $scope, $q, manage_state, data_service){
    // Factory instance for controller created
    this.state = manage_state;
    this.list_controller_ds_factory_instance = data_service;
    
    this.list_controller_ds_factory_instance.get_data().then(function(response){
        $scope.data = response.data;
    })

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
        this.state.toggle = false;
    };
});