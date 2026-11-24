
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
            message.textContent = "🎉 You Win! You guessed the number!";
            
            document.getElementById("playAgain").style.display = "block";
            document.getElementById("guess").disabled = true;
            document.querySelector("form button").disabled = true;
        }

        document.getElementById("score").textContent = "Guesses: " + score;
    }

    document.getElementById("guess").value = "";

    if (guess !== secretNumber) {
        document.getElementById("guess").focus();
    }
}

function restartGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    score = 0;

    document.getElementById("score").textContent = "Guesses: 0";
    document.getElementById("message").textContent = "Good luck!";

    document.getElementById("guess").disabled = false;
    document.querySelector("form button").disabled = false;

    document.getElementById("playAgain").style.display = "none";

    document.getElementById("guess").focus();
}
