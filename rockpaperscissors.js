//UI elements
const buttonContainer = document.querySelector(".buttonContainer");
buttonContainer.addEventListener('click',(e)=>{interpretEvent(e);});
let computerScore = 0;
let humanScore = 0;

const myscore = document.querySelector('#hscore');
myscore.textContent = humanScore;
const pcscore = document.querySelector('#cscore');
pcscore.textContent = computerScore;
const humanPic = document.querySelector('#HumanChoicePic');
const compPic = document.querySelector('#ComputerChoicePic');
const feedback = document.querySelector('#Feedback');

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
                feedback.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                humanPic.setAttribute('src', './Resources/Rock.png');
                compPic.setAttribute('src', './Resources/Paper.png');
                return "Lose";
            }
            else if(computerChoice == 'scissors'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                feedback.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                humanPic.setAttribute('src', './Resources/Rock.png');
                compPic.setAttribute('src', './Resources/Scissors.png');
                return 'Win';
            }
            else
                console.log(`It's a tie, ${humanChoice} and ${computerChoice} matches!`);
                feedback.textContent = `It's a tie, ${humanChoice} and ${computerChoice} matches!`;
                humanPic.setAttribute('src', './Resources/Rock.png');
                compPic.setAttribute('src', './Resources/Rock.png');
                return "Tie";
            break;
        case "paper":
            if(computerChoice == 'scissors'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                feedback.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                humanPic.setAttribute('src', './Resources/Paper.png');
                compPic.setAttribute('src', './Resources/Scissors.png');
                return "Lose";
            }
            else if(computerChoice == 'rock'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                feedback.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                humanPic.setAttribute('src', './Resources/Paper.png');
                compPic.setAttribute('src', './Resources/Rock.png');
                return 'Win';
            }
            else
                console.log(`It's a tie, ${humanChoice} and ${computerChoice} matches!`);
                feedback.textContent = `It's a tie, ${humanChoice} and ${computerChoice} matches!`;
                humanPic.setAttribute('src', './Resources/Paper.png');
                compPic.setAttribute('src', './Resources/Paper.png');
                return "Tie";
            break;
        case "scissors":
            if(computerChoice == 'rock'){
                console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
                feedback.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
                humanPic.setAttribute('src', './Resources/Scissors.png');
                compPic.setAttribute('src', './Resources/Rock.png');
                return "Lose";
            }
            else if(computerChoice == 'paper'){
                console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
                feedback.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
                humanPic.setAttribute('src', './Resources/Scissors.png');
                compPic.setAttribute('src', './Resources/Paper.png');
                return 'Win';
            }
            else
                console.log(`It's a tie, ${humanChoice} and ${computerChoice} matches!`);
                feedback.textContent = `It's a tie, ${humanChoice} and ${computerChoice} matches!`;
                humanPic.setAttribute('src', './Resources/Scissors.png');
                compPic.setAttribute('src', './Resources/Scissors.png');
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

    if(humanScore < 5 && computerScore < 5)
    {
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
    } else reset();
}

//Reset game
const reset = () => {

    humanScore = 0;
    computerScore = 0;
    feedback.textContent = "Please choose a move...";
    myscore.textContent = humanScore;
    pcscore.textContent = computerScore;
    humanPic.setAttribute('src', 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3ozNHBnMXY0bGxqcnhpN3g5bXJ2ZHk1c2RuZG9hZnJqbWp4a2dueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.webp');
    compPic.setAttribute('src', 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExY3ozNHBnMXY0bGxqcnhpN3g5bXJ2ZHk1c2RuZG9hZnJqbWp4a2dueiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu3XilJ5BOiSGic/giphy.webp');

}