console.log("AAAAAYYYYY");

let round = 1;
let gameOn = true;
let compScore = 0;
let playerScore = 0
let computerChoice = "";
let result = "";

let playerChoice;

console.log('Get ready to play!')
while(gameOn){

    console.log(`It is round ${ round }!  Lets play!`);

    playerChoice = prompt('Make your choice!');

    playerChoice = playerChoice.toLowerCase();

    switch (playerChoice) {
        case "r":
            playerChoice = "Rock";
            break;
        case "p":
            playerChoice = "Paper";
            break;
        case "s":
            playerChoice = "Scissors";
            break;
        case "rock":
            playerChoice = "Rock";
            break;
        case "paper":
            playerChoice = "Paper";
            break;
        case "scissors":
            playerChoice = "Scissors";
            break;
        
        default :
            playerChoice = null      
    }

    if (playerChoice != null) {
        //Only continue on if the input was parsed

        console.log(`You chose ${ playerChoice}!`);

        computerChoice = getComputerMove();

        console.log(`The computer chose ${ computerChoice }`);

        result = checkWinner(playerChoice, computerChoice)
        //Check who won the round
        if (result == "draw") {
            console.log("Draw!")
        } else if (result == "win") {
            playerScore += 1;
            console.log(`You won this round!  Score is you:${ playerScore } to computer: ${ compScore }`)
            advanceRound();
        } else if (result == "loss") {
            compScore += 1;
            console.log(`You lost this round!  Score is you:${ playerScore } to computer: ${ compScore }`)
            advanceRound();
        }

        
    }
    else {
        console.log('I didn\'t understand your choice.')
    }

    
}

console.log(`Game over!  Final score is you:${ playerScore } to computer: ${ compScore }.  ${ playerScore > compScore ? "You" : "Computer" } won!!`)

//*************Function Definitions ********************* */
function getComputerMove() {
    let num = Math.floor(Math.random() * 3);

    switch(num){
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
            break;
    }
}

function checkWinner(player, computer) {
    
    //Check for the draw
    if (player == computer) {
        return "draw";
    } else if (player == "Rock" && computer == "Paper") {
        return "loss";
    } else if (player == "Rock" && computer == "Scissors") {
        return "win";
    } else if (player == "Paper" && computer == "Rock") {
        return "win";
    } else if (player == "Paper" && computer == "Scissors") {
        return "loss";
    } else if (player == "Scissors" && computer == "Paper") {
        return "win";
    } else if (player == "Scissors" && computer == "Rock") {
        return "loss";
    }
}

function advanceRound() {
    (round == 5) ? gameOn = false : gameOn = true;

    if (playerScore >= 3 || compScore >= 3) gameOn = false;
    
    round += 1;
}


//examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round(examScore/examHighestScore*100) }%). ${ examScore >= 49 
    //'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;