// 01_rps : javascript file for the Odin Project

// TODO : 
// - refaire une partie
// - faire plusieures parties d'un coup


let computerSelection, playerSelection

// On définit un array avec les trois possibilités
const arr = ["rock", "paper", "scissors"];

// Une fonction pour choisir une possibilité au hasard dans le arr
function getComputerChoice(){

    // On return un choix au hasard
    return computerSelection = arr[Math.floor(Math.random() * arr.length)]
}

// Selection du joueur
playerSelection = prompt(' Choose rock, paper or scissors ').toLowerCase()

// Selection du cpu
computerSelection = getComputerChoice()

// Lance une partie de Rock Paper Scissors
function playRound(playerSelection, computerSelection){
    console.log("player choose " + playerSelection)
    console.log("computer choose "+ computerSelection)

    if (playerSelection === computerSelection){
        console.log ("tie!")
    } 
    else if(playerSelection === 'rock' && computerSelection === 'paper'){
        console.log("cpu win this round")
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        console.log("player win this round")
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        console.log("player win this round")
    }
    else if(playerSelection === 'paper' && computerSelection === 'scissors'){
        console.log("cpu win this round")
    }
    else if(playerSelection === 'scissors' && computerSelection === 'rock'){
        console.log("cpu win this round")
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        console.log("player win this round")
    }
}

// Si la selection du joueur n'est pas incluse dans arr, on invite le joueur à une nouvelle selection

if (arr.includes(playerSelection)){
    playRound(playerSelection, computerSelection)
    

} else {
    alert(playerSelection + " is not a valid choice ")
    window.location.reload();
}