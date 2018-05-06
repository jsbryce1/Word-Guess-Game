//## Variables
var wins = 0;
var losses = 0;
var correctLetter = [];
var guessesRemaining = 0;
var wordGuess = " ";
var wordGuessArray = [];
var wrongLetter = [];
var wordArray = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Abra"]
var working = false;
//## DOm Elements
var lettersGuessed = document.getElementById("letters-guessed");
var startButton = document.getElementById("start-button");
var guessLeft = document.getElementById("guesses-left");
var winsVar = document.getElementById("wins");
var lossesVar = document.getElementById("losses");
var TextPlaceholders = document.getElementById("placeholders");
var wins = 0;
var losses = 0;
var correctLetter = [];
var guessesRemaining = 0;
var wordGuess = " ";
var wordGuessArray = [];
var wrongLetter = [];
var wordArray = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle", "Abra", "Gangar", "Mewtwo"]
var working = false;





//##  Choose pokemon name, reset values and create the placeholders
function newGame() {
    working = true;
    guessesRemaining = 8;
    correctLetter = [];
    wrongLetter = [];
    wordGuessArray = [];


    wordGuess = wordArray[Math.floor(Math.random() * 7)];
//## Add placeholders for the Pokemon's Name 
    for (var i = 0; i < wordGuess.length; i++) {
        if (wordGuess[i] === " ") {
            wordGuessArray.push(" ");
        } else {
            wordGuessArray.push("_");
        }
    }
  //## Change Dom info to new values
    guessLeft.textContent = guessesRemaining;
    TextPlaceholders.textContent = wordGuessArray.join(" ");
    lettersGuessed.textContent = wrongLetter;
}

//## Checks the pressed letter and checks if its in the current string.
function letterGuess(letter) {

    if (working === true && correctLetter.indexOf(letter) === -1) {
 //## runs the Game logic
        correctLetter.push(letter);

//##  checks to see if the guessed letter is in the picked word
        for (var i = 0; i < wordGuess.length; i++) {
//## Makes both of the letters lowercase to check them with the Pokemons name.
            if (wordGuess[i].toLowerCase() === letter.toLowerCase()) {
//## if its true, then change the placeholder to the chosen letter.
                wordGuessArray[i] = wordGuess[i];
            }

        }

        TextPlaceholders.textContent = wordGuessArray.join(" ");
        checkIncorrect(letter);

    } else {

        //## alerts if the game is over or needs to start.
        if (!working) {
            alert("Click 'Start a New Game' to play!");
            //## alerts is the same key is pressed twice.
        } else {
            alert("You already picked that letter dummy ;p");

        }
    }

}

function checkIncorrect(letter) {
    if (wordGuessArray.indexOf(letter.toLowerCase()) === -1 &&
        wordGuessArray.indexOf(letter.toUpperCase()) === -1) {
        guessesRemaining--;
        wrongLetter.push(letter);
        lettersGuessed.textContent = wrongLetter.join(" ");
        guessLeft.textContent = guessesRemaining;
    }
    lossCount();
}

function lossCount() {
    if (guessesRemaining === 0) {
        losses++;
        working = false;
        lossesVar.textContent = losses;

    }
    winning();
}

function winning() {
    if (wordGuess.toLowerCase() === wordGuessArray.join("").toLowerCase()) {
        wins++;
        working = false;
        winsVar.textContent = wins;

    }
}

startButton.addEventListener('click', newGame);

document.onkeyup = function (event) {
    //keycode for "A" and___________keycode for "z"
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        ///the letter actually guessed
        letterGuess(event.key);
    }
}
