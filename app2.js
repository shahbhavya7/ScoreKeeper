// This is the second version of the app.js file which is refactored to make the code more readable and maintainable
// This version uses objects to store the data of the players and the reset button and the winning score input

const p1 = { // creating an object for player 1
    score: 0, // score of player 1
    button: document.querySelector('#p1Button'), // select the button of player 1
    display: document.querySelector('#p1Display') // select the display of player 1
}
const p2 = { // creating an object for player 2
    score: 0,
    button: document.querySelector('#p2Button'), // button of player 2
    display: document.querySelector('#p2Display')   // display of player 2
}

const resetButton = document.querySelector('#reset'); // select the reset button
const winningScoreSelect = document.querySelector('#playto'); // selecting the winning score input and storing it in a variable
let winningScore = 3; // setting the winning score to 3 initially
let isGameOver = false; // initially the game is not over

function updateScores(player, opponent) { // function to update the score of the player
    if (!isGameOver) { // if the game is not over then only update the score
        player.score += 1; // increment the score of the player
        if (player.score === winningScore) { // if the score of the player is equal to the winning score then the game is over
            isGameOver = true; // game is over
            player.display.classList.add('has-text-success'); //set the text color of the player to green
            opponent.display.classList.add('has-text-danger'); // set the text color of the opponent to red
            player.button.disabled = true; // disable the button of the player
            opponent.button.disabled = true; // disable the button of the opponent
        }
        player.display.textContent = player.score; // update the score of the player in the display
    }
}


p1.button.addEventListener('click', function () { // add event listener to the button of player 1
    updateScores(p1, p2) // call the updateScores function and pass the player 1 and player 2 as arguments which sets player 1 as the player and player 2 as the opponent
})
p2.button.addEventListener('click', function () { // add event listener to the button of player 2
    updateScores(p2, p1) // call the updateScores function and pass the player 2 and player 1 as arguments which sets player 2 as the player and player 1 as the opponent
})


winningScoreSelect.addEventListener('change', function () { // add event listener to the winning score input
    winningScore = parseInt(this.value); // convert the value of the input into a number and store it in the winningScore variable
    reset(); // reset the game if the winning score is changed by executing the reset function
})

resetButton.addEventListener('click', reset) // add event listener to the reset button and call the reset function when the button is clicked

function reset() { // reset function
    isGameOver = false; // reset the game if it is not written then gameOver will remain true as from previous game and game will not start
    for (let p of [p1, p2]) { // loop through the players
        p.score = 0; // set the score of the player to 0
        p.display.textContent = 0; // set the score of the player to 0 in the display
        p.display.classList.remove('has-text-success', 'has-text-danger'); // remove the class winner and loser from the display
        p.button.disabled = false; // enable the button if it is disabled from previous game
    }
}
