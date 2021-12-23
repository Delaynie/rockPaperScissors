
// console.log("It's working!");

/* function for computer play mode to log a random response*/
function computerPlay() {
    arr = new Array(3);
        arr[0] = "rock";
        arr[1] = "paper";
        arr[2] = "scissors";
    let random = Math.floor(Math.random()*arr.length);
    let randomWord = random;
    return arr[randomWord];
}
//computerPlay();

// game play

function playRound(playerSelection, computerSelection) {
   /* trying to figure out how to go from prompting user for correct term to starting the game
    let tryAgain;
    if(playerSelection.toLowerCase() != "rock" || 
    playerSelection.toLowerCase() != "scissors" || 
    playerSelection.toLowerCase() != "paper") {
        tryAgain = window.prompt("Please enter rock, paper, or scissors:", "");
    } */
    console.log(playerSelection + " " + "vs" + " " + computerSelection);
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "It's a tie!"
    }
    // if paper 
    if (player == "paper" && computer == "rock") {
        return "Paper covers rock, you win!"
    } else if (player == "paper" && computer == "scissors") {
        return "Scissors cuts papers, you lose!"
    }
    //if rock
        else if (player == "rock" && computer == "scissors") {
            return "Rock breaks scissors, you win!"
        }   else if (player == "rock" && computer == "paper") {
            return "Paper covers rock, you lose!"
        }
    //if scissors
            else if (player == "scissors" && computer == "rock") {
                return "Rock breaks scissors, you lose!"
            } else if (player == "scissors" && computer == "paper") {
              return "Scissors cut paper, you win!"
        }
    }       

//let playerSelection = "rock";
let playerSelection; // = window.prompt("Rock, paper, or scissors?", "");
const computerSelection = computerPlay();

// console.log(playRound(playerSelection, computerSelection));

function game(playerSelection) {
    let i = 0;
    for(i = 0; i < 5; i++){
        playerSelection = window.prompt("Rock, paper, or scissors?", "");
        let rounds = playRound(playerSelection, computerPlay());
        console.log(rounds);
    }
    console.log("\n" + "Good game, Champ! Refresh the page to play again");
}

game(playerSelection);