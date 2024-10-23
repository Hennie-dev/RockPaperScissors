//UI elements
const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener('click',(e)=>{interpretEvent(e);});
let computerScore = 0;
let humanScore = 0;

const myscore = document.querySelector('#hscore');
myscore.textContent = humanScore;
const pcscore = document.querySelector('#cscore');
pcscore.textContent = computerScore;

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
let getHumanChoice = (trigger) => {
    let humanChoice = trigger;
    if(humanChoice == null){return "Quit";};
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

let playRound = (trigger) => {

    let humanChoice = getHumanChoice(trigger);
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
        case "Quit":
            return "Quit";
            break;
        default:
            return `Oops, something went wrong!`;
    }
}

//eventListerner method

const interpretEvent = (e) => {
    const trigger = e.target;
    

    switch(trigger.id){
        case 'rock':
            let result = playRound('rock');
            switch(result){
                case "Win":
                    humanScore++;
                    myscore.textContent = humanScore;
                    break;
                case "Lose":
                    computerScore++;
                    pcscore.textContent = computerScore;
                case "Tie":
                    break;
                default:
                    break;
            }
            break;
        case 'paper':
            let result2 = playRound('paper');
            switch(result2){
                case "Win":
                    humanScore++;
                    myscore.textContent = humanScore;
                    break;
                case "Lose":
                    computerScore++;
                    pcscore.textContent = computerScore;
                case "Tie":
                    break;
                default:
                    break;
            }
            break;
        case 'scissors':
            let result3 = playRound('scissors');
            switch(result3){
                case "Win":
                    humanScore++;
                    myscore.textContent = humanScore;
                    break;
                case "Lose":
                    computerScore++;
                    pcscore.textContent = computerScore;
                case "Tie":
                    break;
                default:
                    break;
            }
            break;
        default:
            alert('Something went wrong.');
            break;
    }
}