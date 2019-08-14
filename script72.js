var numGuess = prompt("Guess a number?");

x=5;

if (numGuess==x) {
    console.log("You got it right")
} else if(numGuess > x) {
    console.log("Too high. Guess again!")
} else if (numGuess < x) {
    console.log("Too low. Guess again!")
}

if (numGuess==x) {
    alert("You got it right")
} else if(numGuess > x) {
    alert("Too high. Guess again!")
} else if (numGuess < x) {
    alert("Too low. Guess again!")
}


