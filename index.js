// Create an object for storing data
let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    Losses : 0,
    Ties : 0
};

// document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} Losses : ${score.Losses} Ties : ${score.Ties}`;

// Using function for instead of code
updateScore();

/* 
if(score === null) {
    score = {
        wins : 0,
        Losses : 0,
        Ties : 0
    }
} 
*/

function playGame(playerMove) {
    const computerMove = pickComputerMove()

    let result = '';

    if(playerMove === 'scissors') {
        if(computerMove === 'rock') {
            result = 'You lose';
        } else if(computerMove === 'paper') {
            result = 'You win'
        } else if(computerMove === 'scissors') {
            result = 'Tie'
        }

    } else if(playerMove === 'paper') {
        if(computerMove === 'rock') {
            result = 'You win';
        } 
        else if(computerMove === 'paper') {
            result = 'Tie'
        } 
        else if(computerMove === 'scissors') {
            result = 'You lose'
        }
        
    } else if(playerMove === 'rock') {
        if(computerMove === 'rock') {
            result = 'Tie';
        }
        else if(computerMove === 'paper') {
            result = 'You lose'
        }
        else if(computerMove === 'scissors') {
            result = 'You win';
        }
    }

    if(result === 'You win') {
        score.wins = score.wins + 1;
    }else if(result === 'You lose') {
        score.Losses = score.Losses + 1;
    }else if(result === 'Tie') {
        score.Ties = score.Ties + 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    // document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} Losses : ${score.Losses} Ties : ${score.Ties}`;

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = ` <div class="move-container">
            <div class="playermove">
                <img src="images/${playerMove}-emoji.png" class="move-icon">You
            </div>
            <div class="computermove">
                <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer
        </div>
</div>`;
    
//             alert(`You picked ${playerMove}. computer picked ${computerMove}. ${result}
// Wins : ${score.wins} Losses : ${score.Losses} Ties : ${score.Ties}`)
}

// Using function for same code over again the program
function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins : ${score.wins} Losses : ${score.Losses} Ties : ${score.Ties}`;
}

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock'
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3) {
        computerMove = 'paper'
    } 
    else if(randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors'
    }
    return computerMove
}