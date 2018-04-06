app.controller("quiz_controller", function($http, $scope, $q, manage_state, data_service){
    this.state = manage_state;
    this.quiz = data_service;
    //Initially
    this.error = false;
    this.finalize = false;
    this.total_answered_questions = 0;
    this.unanswerd_questions = "ALL"
    
    this.quiz.get_quiz().then(function(response){
        $scope.quiz_data = response.data;
        this.unanswerd_questions = $scope.quiz_data.length;         
        console.log(this.unanswerd_questions); 
    });

    this.active_question = 0;
    
    this.set_active_question = function(index){
        if(index === undefined)
        {
            var braekout = false;
            var limit = $scope.quiz_data.length - 1;

            while(!braekout){
                this.active_question = this.active_question < limit?++this.active_question:0;
                
                if(this.active_question===0){
                    this.error = true;
                }

                if($scope.quiz_data[this.active_question].selected === null){
                    braekout = true;
                }
            }
        }else{
            this.active_question = index;
        }
    };

    this.next_triggered = function(){
        console.log("Next Triggered.");
        if($scope.quiz_data[this.active_question].selected !== null){
            if(this.total_answered_questions >= $scope.quiz_data.length){
                for(var i = 0; i < $scope.quiz_data.length; i++){
                    if($scope.quiz_data[i].selected === null){
                        this.set_active_question(i);
                        return;
                    }
                }
                this.error = false;
                this.finalize = true;
                return;
            }
        }

        this.set_active_question();
    };

    this.select_answer = function(index){
        $scope.quiz_data[this.active_question].selected = index;
        if($scope.quiz_data[this.active_question].selected_set === true){
            console.log("Do not increment");
        }else{
            $scope.quiz_data[this.active_question].selected_set = true;
            if(this.total_answered_questions < $scope.quiz_data.length){
                this.total_answered_questions++;
                this.unanswerd_questions = $scope.quiz_data.length - this.total_answered_questions;
            }
        }
        console.log($scope.quiz_data[this.active_question].selected);
        console.log($scope.quiz_data[this.active_question].selected_set);
    }

});