
//Function to get computer choice, with recursion to remove 0 results and only output 1 2 or 3
let getComputerChoice = () => {

  let randomNumber = Math.round((Math.random()*10)%3);

  switch(randomNumber){
    case 0:
        let newRandomNumber = getComputerChoice();
        return newRandomNumber;
    case 1:
        return "rock";
        break;
    case 2:
        return "paper";
        break;
    case 3:
        return "scissors";
        break;
    default:
        return "Rock";
  }

};
//function for human input, with recursion to trigger erroneous input catching.
let getHumanChoice = () => {
    let humanChoice = prompt("Enter 'rock', 'paper, or 'scissors' as your choice.");
    let formattedChoice = humanChoice.toLowerCase();

    switch(formattedChoice){
        case "rock":
            return formattedChoice;
            break;
        case "paper":
            return formattedChoice;
            break;
        case "scissors":
            return formattedChoice;
            break;
        default:
            alert("Not a valid choice, please choose again.");
            let newChoice = getHumanChoice();
            return newChoice;
    }
}

//Function to play a round

let playRound = () => {

    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();

    switch(humanChoice){
        case "rock":
            if(computerChoice == 'paper'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                return "Lose";
            }
            else if(computerChoice == 'scissors'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                return 'Win';
            }
            else
                console.log(`It's a tie, ${humanChoice} and ${computerChoice} matches!`);
                return "Tie";
            break;
        case "paper":
            if(computerChoice == 'scissors'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                return "Lose";
            }
            else if(computerChoice == 'rock'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                return 'Win';
            }
            else
                console.log(`It's a tie, ${humanChoice} and ${computerChoice} matches!`);
                return "Tie";
            break;
        case "scissors":
            if(computerChoice == 'rock'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                return "Lose";
            }
            else if(computerChoice == 'paper'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                return 'Win';
            }
            else
                console.log(`It's a tie, ${humanChoice} and ${computerChoice} matches!`);
                return "Tie";
            break;
        default:
            return `Oops, something went wrong!`;
    }
}

//Function to play a game of five rounds

let playGame = () => {

    let computerScore = 0;
    let humanScore =0;

    while(computerScore < 5 && humanScore <5){
        let result = playRound();

        switch(result){
            case "Win":
                humanScore++;
                console.log(`Scoring: You ${humanScore}, Computer: ${computerScore}`);
                break;
            case "Lose":
                computerScore++;
                console.log(`Scoring: You ${humanScore}, Computer: ${computerScore}`);
                break
            case "Tie":
                break;
            default:
                break;
        }
        
    }

    if(computerScore == 5)
        console.log(`Sorry! You lost! ${computerScore} - ${humanScore}`);
    else if(humanScore == 5)
        console.log(`Hooray, you won! ${humanScore} - ${computerScore}`);
}

playGame();