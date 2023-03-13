const paraChoicesMade = document.getElementById("choices-made");
const paraWhoWins = document.getElementById("who-wins");

let choices = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    // console.log(getComputerChoice(3));
    // Expected output: 0, 1 or 2 indexed item of choices array

    return choices[Math.floor(Math.random() * 3)];
  }

  
function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
        paraWhoWins.textContent = "Round ended in a draw!!";
    }
    else
    {
        if (playerSelection === 'rock' && computerSelection === 'scissors')
        {
            paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
            paraWhoWins.textContent = "Player Wins!!";
        }
        else if (playerSelection === 'rock' && computerSelection === 'paper')
        {
            paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
            paraWhoWins.textContent = "Computer Wins!!";
        }
        else if (playerSelection === 'paper' && computerSelection === 'rock')
        {
            paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
            paraWhoWins.textContent = "Player Wins!!";
        }
        else if (playerSelection === 'paper' && computerSelection === 'scissors')
        {
            paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
            paraWhoWins.textContent = "Computer Wins!!";
        }
        else if (playerSelection === 'scissors' && computerSelection === 'rock')
        {
            paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
            paraWhoWins.textContent = "Computer Wins!!";
        }
        else if (playerSelection === 'scissors' && computerSelection === 'paper')
        {
            paraChoicesMade.textContent = `Player selected ${playerSelection} & computer selected ${computerSelection}`;
            paraWhoWins.textContent = "Player Wins!!";
        }
        else
        {
            paraWhoWins.textContent = "You have entered nothing!! Or Wrong choice :(";
        }
    }
}


document.getElementById("btn-rock").addEventListener("click", () => {
    const playerChoice = 'rock';
    let computerChoice = getComputerChoice()
    console.log(playRound(playerChoice.toLowerCase() , computerChoice));
});

document.getElementById("btn-paper").addEventListener("click", () => {
    const playerChoice = 'paper';
    let computerChoice = getComputerChoice()
    console.log(playRound(playerChoice.toLowerCase() , computerChoice));
});

document.getElementById("btn-scissors").addEventListener("click", () => {
    const playerChoice = 'scissors';
    let computerChoice = getComputerChoice()
    console.log(playRound(playerChoice.toLowerCase() , computerChoice));
});

