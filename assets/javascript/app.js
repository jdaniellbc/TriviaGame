// build a library of questions with true false answers 
// five questions
// time limit of 30 seconds -- game ends at 30 secons and reports number of correct/incorrect answers
// include a countdown timer with a start timer (quiz) button.

correctAnswers = 0;
incorrectAnswers = 0;

$(document).ready(function() {


    $("#startButton").click(function() {

        
        
        (function() {
            var countDown = 31;

            setInterval(function() {
                countDown--;
                if (countDown >= 0) {
                    span = document.getElementById("count");
                    span.innerHTML = countDown;
                }
                if (countDown === 0) {
                    clearInterval(countDown);
                }

            }, 1000);

        })();

    })















});