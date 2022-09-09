// 01_rps : javascript file for the Odin Project



let computerSelection, playerSelection, cpuChoice

// On définit un array avec les trois possibilités
const arr = ["Rock", "Paper", "Scissors"];

// Une fonction pour choisir une possibilité au hasard dans le arr
function getComputerChoice(){

    // On return un choix au hasard
    return cpuChoice = arr[Math.floor(Math.random() * arr.length)];


}


getComputerChoice()
console.log(cpuChoice)