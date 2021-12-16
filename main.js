
console.log("It's working!");

/* function for computer play mode to log a random response */
function computerPlay() {
    arr = new Array(3);
        arr[0] = "rock";
        arr[1] = "paper";
        arr[2] = "scissors";
    let random = Math.floor(Math.random()*arr.length);
    let randomWord = random;
    console.log(arr[randomWord]);
}

computerPlay();