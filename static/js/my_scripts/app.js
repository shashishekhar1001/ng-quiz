var app = angular.module("turtle_facts", []);

app.config(function($httpProvider) {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
	$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
	$httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
	$httpProvider.defaults.useXDomain = true;
	$httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
});

app.factory('change_quiz_state', function () {

    var data = {
        activate_quiz: 'false'
    };

    return {
        get_activate_quiz: function () {
            return data.activate_quiz;
        },
        set_activate_quiz: function (state) {
            data.activate_quiz = state;
        }
    };
});