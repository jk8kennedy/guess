// Generate a random number between 1 and 100
let x = Math.floor(Math.random() * 100) + 1;

let guess = 5000;
let score = 0;

// Loop the game
while (guess !== x) {
    guess = Number(prompt("Guess a number between 1 and 100: "));
    score++;

    // Check the guess
    if (guess > x) {
        console.log("Too High");
    } 
    else if (guess === x) {
        console.log("You Win!");
        console.log("It took you " + score + " guesses");
    } 
    else {
        console.log("Too Low");
    }
}
