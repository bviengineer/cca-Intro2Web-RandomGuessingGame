
//SCOPE OF APPLICATION-MINIMUM REQUIREMENTS
    /*App will need to:
        1. Have a textbox for user to enter a random number 
        2. Convert the user input to a number via parseInt()
        3. Check user guess against the randomly generated computer number
        4. If user guess matches that of the computer:
        5. Inform them of their win and display the correctly guessed number & their score
        6. Else:
            6.a. Display user guess & the randomly generated computer guess
            6.b. Inform user to try again should they desire
            6.c. Keep track of their score and display it in the another div */

var userGuess = document.getElementById("user-guess"), 
    checkUserGuessButton = document.getElementById("check-user-guess-button"),
    clearGameButton = document.getElementById("clear-game-button"),
    displayDiv = document.getElementById("display-div"),
    userScoreDiv = document.getElementById("user-score-div"),
    userAttemptsDiv = document.getElementById("user-attempts-div");
    lowerLimit = 1;
    upperLimit = 50,
    userScore = 0,
    userAttempts = 0;

    //Will generate a random number between 1 and 100, compare user guess to computers' guess and display results
       var randomNum = function randomNum() {
            var myRanNum = Math.floor(Math.random() * upperLimit) + 1;
            var userGuessNum = parseInt(userGuess.value);

        if(userGuessNum < lowerLimit || userGuessNum > upperLimit) {
                userAttempts += 1;
                userAttemptsDiv.innerHTML = "Number of attempts: " + "<b>" + userAttempts + "</b>";
                userScoreDiv.innerHTML = "Your score is: " + "<b>" + userScore + "</b>";
                displayDiv.innerHTML = "Please, only enter a number between <b>1 and 50</b>";
            }
            else if(userGuessNum === myRanNum) {
                userScore += 10;
                userAttempts += 1;
                userAttemptsDiv.innerHTML = "Number of attempts: " + "<b>" + userAttempts + "</b>";
                userScoreDiv.innerHTML = "Your score is: " + "<b>" + userScore + "</b>";
                displayDiv.innerHTML = "<b>" + myRanNum + "</b>"+ " is a correct guess!";                        
            }   
            else {
                userGuessNum !== myRanNum
                userAttempts += 1;
                userAttemptsDiv.innerHTML = "Number of attempts: " + "<b>" + userAttempts + "</b>";
                userScoreDiv.innerHTML = "Your score is: " + "<b>" + userScore + "</b>";
                displayDiv.innerHTML = "Your guess of " + "<b>" + userGuessNum + "</b>" + " is incorrect. The number is: " + "<b>" + myRanNum + "</b>";
            }    
        }
    //calls randomNum() which processes user guess, compares it to randomly generated computer number and provides user with output    
    checkUserGuessButton.addEventListener("click", function() {
        randomNum();
    });

                //clears all output areas, reset variable counters to 0 and clears textboxes
                clearGameButton.addEventListener("click", function() {
                    userGuess.value = ""; 
                    displayDiv.innerHTML = "<b>Guesses</b> will display here.";
                    userScoreDiv.innerHTML = "Your <b>Score</b> will display here";        
                    userAttemptsDiv.innerHTML = "<b>Number of Attempts</b> will display here.";
                    userScore = 0;       
                    userAttempts = 0;
                });