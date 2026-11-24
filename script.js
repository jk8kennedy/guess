
let x = Math.floor(Math.random() * 100) + 1;
let score = 0;

function checkGuess() {

    let guess = Number(document.getElementById("guess").value);

    score++;

    if (guess > x) {
        document.getElementById("message").innerHTML = "Too High!";
    }
    else if (guess == x) {
        document.getElementById("message").innerHTML = "You Win!";
        document.getElementById("message").innerHTML += 
            " It took you " + score + " guesses!";
    }
    else {
        document.getElementById("message").innerHTML = "Too Low!";
    }

    document.getElementById("score").innerHTML = "Guesses: " + score;
}
