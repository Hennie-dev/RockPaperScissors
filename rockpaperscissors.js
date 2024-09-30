let getComputerChoice = () => {

  let randomNumber = Math.round((Math.random()*10)%3);

  switch(randomNumber){
    case 0:
        let newRandomNumber = getComputerChoice();
        return newRandomNumber;
    case 1:
        return "Rock";
        break;
    case 2:
        return "Paper";
        break;
    case 3:
        return "Scissors";
        break;
    default:
        return "Rock";
  }

};

let getHumanChoice = () => {
    let humanChoice = prompt("Enter 'rock', 'paper, or 'scissors' as your choice.");

    switch(humanChoice){
        case "rock":
            return humanChoice;
            break;
        case "paper":
            return humanChoice;
            break;
        case "scissors":
            return humanChoice;
            break;
        default:
            alert("Not a valid choice, check your spelling");
            let newChoice = getHumanChoice();
            return newChoice;
    }
}

console.log(getHumanChoice());