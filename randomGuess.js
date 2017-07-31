var userGuess = document.getElementById("user-guess"), 
    checkUserGuessButton = document.getElementById("check-user-guess-button"),
    clearGameButton = document.getElementById("clear-game-button"),
    displayDiv = document.getElementById("display-div"),
    userScoreDiv = document.getElementById("user-score-div"),
    lowerLimit = 1;
    upperLimit = 100,
    userScore = 0,
    userAttempts = 0;

    //SCOPE OF APPLICATION
        //App will need to:
            //have a textbox for user to enter a random number 
            //convert the user input to a number via parseInt()
            //check user guess against the randomly generated computer number
            //if user guess matches that of the computer:
                //inform them of their win and display the correctly guessed number & their score
            //else
                //display user guess & the randomly generated computer guess
                //inform user to try again should they desire
                //keep track of their score and display it in the another div


                //will generate a random number between 1 and 100, compare user guess to computers' guess and display results
                var randomNum = function randomNum() {
                    var myRanNum = Math.floor(Math.random() * upperLimit) + 1;
                    var userGuessNum = parseInt(userGuess.value);

                    if(userGuessNum < lowerLimit || userGuessNum > upperLimit) {
                            userAttempts += 1;
                            userScoreDiv.innerHTML = "Your score is: " + userScore + "\n" + "And your number of attempts: " + userAttempts;
                            displayDiv.innerHTML = "Please, only enter a number between 1 and 100";
                        }
                        else if(userGuessNum === myRanNum) {
                            userScore += 10;
                            userAttempts += 1;
                            userScoreDiv.innerHTML = "Your score is: " + userScore + "\n" + "And your number of attempts: " + userAttempts;
                            displayDiv.innerHTML = myRanNum + " is a correct guess!";                        
                        }   
                        else {
                            userGuessNum !== myRanNum
                            userAttempts += 1;
                            userScoreDiv.innerHTML = "Your score is: " + userScore;
                            displayDiv.innerHTML = "Your guess of " + userGuessNum + " is incorrect. The number is: " + myRanNum + "\n Your number of attempts: " + userAttempts;
                        }    
                    }
                //calls randomNum() which processes user guess, compares it to randomly generated computer number and provides user with output    
                checkUserGuessButton.addEventListener("click", function() {
                    randomNum();
                });

                //clears all output areas, reset variable counters to 0 and clears textboxes
                clearGameButton.addEventListener("click", function() {
                    userGuess.value = ""; 
                    displayDiv.innerHTML = "";
                    userScoreDiv.innerHTML = "";        
                    userScore = 0;       
                    userAttempts = 0;
                });