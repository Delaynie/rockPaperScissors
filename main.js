
console.log("It's working!");

/* function for computer play mode to log a random response*/
function computerPlay() {
    arr = new Array(3);
        arr[0] = "rock";
        arr[1] = "paper";
        arr[2] = "scissors";
    let random = Math.floor(Math.random()*arr.length);
    let randomWord = random;
    //console.log(arr[randomWord]);
    return arr[randomWord];
}
//computerPlay();

// game play

function playRound(playerSelection, computerSelection) {
    //console.log("it's working");
    console.log(playerSelection, computerSelection);
    // if paper 
    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper covers rock, you win!");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("Scissors cuts papers, you lose!");
    } // if it's a tie
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
    //if rock
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Rock breaks scissors, you win!");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper covers rock, you lose!");
    } // if it's a tie
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
    //if scissors
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("Rock breaks scissors, you lose!");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("Scissors cut paper, you win!");
    } // if it's a tie
    else if (playerSelection == computerSelection) {
        console.log("It's a tie!");
    }
}   

let playerSelection = "rock";
const computerSelection = computerPlay();

game(playerSelection, computerSelection);