
let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 0;

function checkGuess(event) {
    event.preventDefault();

    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if (guess < 1 || guess > 100 || !Number.isInteger(guess)) {
        message.textContent = "Enter a number between 1 and 100!";
    }
    else {
        score++;

        if (guess > secretNumber) {
            message.textContent = "Too high! Try again.";
        }
        else if (guess < secretNumber) {
            message.textContent = "Too low! Try again.";
        }
        else {
            message.textContent = "🎉 Correct! You guessed the number!";
        }

        // Update the score
        document.getElementById("score").textContent = "Guesses: " + score;
    }

    // Clear the input
    document.getElementById("guess").value = "";

    // Focus the input again
    document.getElementById("guess").focus();
}
