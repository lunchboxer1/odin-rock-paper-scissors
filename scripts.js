//Variables
let round = 0;
let gameOver = false;
let computerScore = 0;
let playerScore = 0
let computerChoice = "";
let playerChoice = "";
let result = "";

//Selectors
const divRound = document.querySelector('#round');
const divScore = document.querySelector('#score');
const divResults = document.querySelector('#results');
const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');

//Event listeners
btnRock.addEventListener('click', () => {
    playerChoice = 'rock';
    advanceState();
});

btnPaper.addEventListener('click', () => {
    playerChoice = 'paper';
    advanceState();
});

btnScissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    advanceState();
});

/*************Function Definitions ********************* */
function advanceState() {
    if(!gameOver) {
        computerChoice = getComputerMove();

        result = checkWinner(playerChoice, computerChoice);

        if (result == 'draw') {
            divResults.textContent = 'Draw!'
        } else if (result === 'win') {
            divResults.textContent = 'You won!'
            playerScore += 1;
        } else if (result === 'loss') {
            divResults.textContent = 'You lost!'
            computerScore += 1;
        }

        if (computerScore >=5 || playerScore >= 5) {
            gameOver = true;
            divResults.textContent = `Game over! ${playerScore > computerScore ? 'You' : 'Computer'} won!`;
        }

        divScore.textContent = `You: ${ playerScore } vs. Computer: ${ computerScore };`
        
        round += 1
        divRound.textContent = `It is round :${ round }`;
    }
}

function getComputerMove() {
    let num = Math.floor(Math.random() * 3);

    switch(num){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function checkWinner(player, computer) {
    
    //Check for the draw
    if (player == computer) {
        return "draw";
    } else if (player == "rock" && computer == "paper") {
        return "loss";
    } else if (player == "rock" && computer == "scissors") {
        return "win";
    } else if (player == "paper" && computer == "rock") {
        return "win";
    } else if (player == "paper" && computer == "scissors") {
        return "loss";
    } else if (player == "scissors" && computer == "paper") {
        return "win";
    } else if (player == "scissors" && computer == "rock") {
        return "loss";
    }
}