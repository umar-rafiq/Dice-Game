function diceGame() {
    // Generate two random numbers between 1 and 6
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    // Set the file paths for the dice images based on the random numbers
    let randomDice1 = `images/dice${randomNum1}.png`;  // Use backticks for string interpolation
    let randomDice2 = `images/dice${randomNum2}.png`;  // Use backticks for string interpolation

    // Target the image elements for Player 1 and Player 2
    let diceImage1 = document.getElementById("p1");
    let diceImage2 = document.getElementById("p2");

    // Set the source attribute for both dice images to the new random dice images
    diceImage1.setAttribute("src", randomDice1);
    diceImage2.setAttribute("src", randomDice2);

    // Get the result element and player boxes for styling the result
    let result = document.getElementById("result");
    let p1_Box = document.querySelector(".player-1");
    let p2_Box = document.querySelector(".player-2");

    // Determine the winner based on the random dice rolls
    if (randomNum1 > randomNum2) {
        result.innerHTML = "Player 1 Winner!";
        result.style.color = "#05BFDB";
        p1_Box.style.borderColor = '#05BFDB';
        p2_Box.style.borderColor = '#2C2C2C';
    } else if (randomNum1 === randomNum2) {
        result.innerHTML = "Draw!";
        result.style.color = "yellowgreen";
        p1_Box.style.borderColor = 'yellowgreen';
        p2_Box.style.borderColor = 'yellowgreen';
    } else {
        result.innerHTML = "Player 2 Winner!";
        result.style.color = "darkorange";
        p2_Box.style.borderColor = 'darkorange';
        p1_Box.style.borderColor = '#2C2C2C';
    }
}