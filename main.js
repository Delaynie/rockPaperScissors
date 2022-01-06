/* Notes to future self : 12-22-21
    * Change it to where the game only stops once a person reaches 5 
    points instead of 5 rounds.
*/


// variables
let playerSelection; // window.prompt("Rock, paper, or scissors?", "");
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

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
   
    console.log(playerSelection + " " + "vs" + " " + computerSelection);
    player = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    if (player == computer) {
        return "It's a tie! No points awarded."
    }
    // if paper 
    if (player == "paper" && computer == "rock") {
        playerScore = ++playerScore;
        return "Paper covers rock, one point awarded!"
    } else if (player == "paper" && computer == "scissors") {
        computerScore = ++computerScore;
        return "Scissors cuts papers, computer get's a point!!"
    }
    //if rock
        else if (player == "rock" && computer == "scissors") {
            playerScore = ++playerScore;
            return "Rock breaks scissors, one point awarded!"
        }   else if (player == "rock" && computer == "paper") {
            computerScore = ++computerScore;
            return "Paper covers rock, computer get's a point!"
        }
    //if scissors
            else if (player == "scissors" && computer == "rock") {
                computerScore = ++computerScore;
                return "Rock breaks scissors, computer get's a point!"
            } else if (player == "scissors" && computer == "paper") {
                playerScore = ++playerScore;
              return "Scissors cut paper, you get a point!"
        }   else if (playerSelection.toLowerCase() != "rock" ||
                    playerSelection.toLowerCase() != "scissors" ||
                    playerSelection.toLowerCase() != "paper") {
                    window.prompt("Invalid input, try again.");
                    return "Invalid input, try again."
    }
    }       

// console.log(playRound(playerSelection, computerSelection));

function game(playerSelection) {
    let i = 0;
    let rounds;
    let winner = 50;
    console.log("Whoever gets to 5 points wins the game!")
    for(i = 0; i < winner; i++) {
        //stuff in the for loop..
        playerSelection = window.prompt("Rock, paper, or scissors?", "");
        rounds = playRound(playerSelection, computerPlay());
        console.log(rounds);
        console.log(playerScore);
        console.log(computerScore);
     
        if(playerScore == 5 && computerScore != 5) {
            winner = playerScore;
            console.log("\n" + "You win! Congratulations. Refresh the page to play again!");
        } else if (computerScore == 5 && playerScore != 5) {
            winner = computerScore;
            console.log("\n" + "You lost. You suck. How does it feel? Refresh the page to try again.")
        } else if (playerScore == 5 && computerScore == 5) {
            console.log("Looks like a tie. Refresh the page to try again!");
        }
     }
}

game(playerSelection);