app.factory("quiz_metrics", function($http, $scope, $q){
    var quiz_obj = {
        quiz_active: false,
        change_state: change_state
    };

    function change_state(state){
        quiz_obj.quiz_active = state;
    }

    return quiz_obj;

});