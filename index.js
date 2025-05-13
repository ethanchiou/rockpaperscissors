const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore=0;
let computerScore=0;

function playGame(playerChoice){
    //Computer choice is random index from 0-2, for rock/paper/scissor respectively
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result=""

    if(playerChoice === computerChoice){
        result = "IT'S A TIE";
    }
    else{
        switch(playerChoice){
            case "rock":
                //return win/loss based on tenariy operator
                result=(computerChoice === "scissors")?"YOU WIN!":"YOU LOSE!";
                break;
            case "paper":
                result=(computerChoice === "rock")?"YOU WIN!":"YOU LOSE!";
                break;
            case "scissors":
                result=(computerChoice === "paper")?"YOU WIN!":"YOU LOSE!";
                break;
        }
    }
    playerDisplay.textContent=`PLAYER: ${playerChoice}`;
    computerDisplay.textContent=`COMPUTER: ${computerChoice}`;
    resultDisplay.textContent=result;

    //remove and colorText class before case to reset the colors(prevents past iterations from affecting color)
    resultDisplay.classList.remove("greenText","redText","blueText");
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
        case "IT'S A TIE":
            resultDisplay.classList.add("blueText");
            break
    }

}