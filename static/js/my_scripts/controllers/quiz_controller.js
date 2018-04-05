app.controller("quiz_controller", function($http, $scope, $q, manage_state, data_service){
    this.state = manage_state;
    this.quiz = data_service;

    this.quiz.get_quiz().then(function(response){
        $scope.quiz_data = response.data;
        console.log($scope.quiz_data[0].selected);
    })
});