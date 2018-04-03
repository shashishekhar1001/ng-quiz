app.controller("quiz_controller", function($http, $scope, $q, change_quiz_state){
    // Factory instance for controller created
    this.quiz_controller_factory_instance = change_quiz_state;
    this.quiz_activate = this.quiz_controller_factory_instance.get_activate_quiz();
});