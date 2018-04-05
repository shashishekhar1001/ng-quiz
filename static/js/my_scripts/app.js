var app = angular.module("turtle_facts", []);

app.config(function($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
});

app.factory('manage_state', function () {
    var data = {
        toggle: true
    };
    return data;
});



app.factory('data_service', function ($http) {
    var turtles_data = "";
    var get_data = function(){
        return $http.get("/api/turtles/")
        .success(function(data, status){
            turtles_data = data;
            return turtles_data;
        })
        .error(function(data, status){
            turtles_data = data;
            return turtles_data;                        
        });
    };

    var quiz_data = "";

    var get_quiz = function(){
        return $http.get("/api/quiz_questions/")
        .success(function(data, status){
            quiz_data = data;
            return quiz_data;
        })
        .error(function(data, status){
            quiz_data = data;
            return quiz_data;                        
        });
    };

    return {
        get_data: get_data,
        get_quiz: get_quiz
    };
});
