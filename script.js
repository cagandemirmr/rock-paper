

function getComputerChoice(value = 3) {

    let computer;

    computer = Math.floor(Math.random() * value);

    switch (computer) {

        case 0:
            computerVal = "Rock";
            break;
        case 1:
            computerVal = "Paper";
            break;
        case 2:
            computerVal = "Scissor";
            break;
    }


    return computerVal;

}



function getHumanChoice() {

    let userChoice = (prompt("Your choice (Rock-Paper-Scissor)"));

    let userChoices = (userChoice[0].toUpperCase()) + (userChoice.slice(1).toLowerCase());



    return userChoices;
}


let humanScore = 0;

let computerScore = 0;



function playRound(computerChoice = getComputerChoice(), humanChoice = getHumanChoice()) {



    if (((computerChoice === "Rock") && (humanChoice === "Scissor")) || ((computerChoice === "Paper") && (humanChoice === "Rock"))) {


        computerScore++;
        console.log("YOU LOSE SCORE", humanScore, "| COMPUTER:", computerScore);










    } else if (((computerChoice === "Rock") && (humanChoice === "Paper")) || ((computerChoice === "Scissor") && (humanChoice === "Rock"))) {

        humanScore++;
        console.log("YOU WIN SCORE: ", humanScore, "| COMPUTER:", computerScore);









    } else {
        console.log("No One WIN SCORE: ", humanScore, "| COMPUTER:", computerScore);


    }



}

while (1 == 1) {
    playRound();
}

