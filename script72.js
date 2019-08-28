var num = 11;

var guess = prompt("Guess a number");

if (guess == num) {
    alert("You got it right");
} else if (guess > num) {
    alert("Too high. Guess again!");
} else if (guess < num) {
    alert("Too low. Guess again!");
}