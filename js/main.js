const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}
//play
function play(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    //console.log(playerChoice, computerChoice, winner)
    showWinner(winner, computerChoice);
}

// get computer choice
function getComputerChoice() {
    const rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.67) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

//get winner
function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw'
    } else if (playerChoice === 'rock') {
        if(computerChoice === 'paper') {
            return 'computer';
        } else {
            return 'player'
        }
    } else if (playerChoice === 'paper') {
        if(computerChoice === 'scissors') {
            return 'computer';
        } else {
            return 'player'
        }
    } else if (playerChoice === 'scissors'){
        if(computerChoice === 'rock') {
            return 'computer';
        } else {
            return 'player'
        }
    }
}

//show winner
function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        scoreboard.player = scoreboard.player + 1;
        result.innerHTML = 
        `<h1 class="win">You Win!</h1>
        <i class="img-${computerChoice}"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    } else if (winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = 
        `<h1 class="lose">You Lose!</h1>
        <i class="img-${computerChoice}"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    } else {
        result.innerHTML = 
        `<h1>It's a draw!</h1>
        <i class="img-${computerChoice}"></i>
        <p>Computer chose <strong>${computerChoice}</strong></p>`;
    }
    score.innerHTML = `
        <p>Player: ${scoreboard.player}</P>
        <p>Computer: ${scoreboard.computer}</p>`
        
        modal.style.display = 'block';
    }

    // restart game
    function restartGame() {
        scoreboard.player = 0;
        scoreboard.computer = 0;
        score.innerHTML = `
        <p>Player: 0</p>
        <p>Computer: 0</P>`
        restart.style.display = 'none';
    }

    //clear modal
    function clearModal(e) {
        if(e.target == modal) {
            modal.style.display = 'none';
    }
}

// event listeners
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);

/* ---------- ORIGINAL CONSOLE EDITION ----------- */
/*
let playerSelection;
const computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

/* function for computer play mode to log a random response*/
/*function computerPlay() {
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
   
    //console edish: console.log(playerSelection + " " + "vs" + " " + computerSelection);
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

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      playerSelection = img.alt.toLowerCase();
  
      playRound(playerSelection, computerSelection);
  /*
      if (playerScore === 5 || computerScore === 5) {
        declareWinner();
      }*/
/*
    });
  });
  */