let SCORE = 0;

function userPick(hand) {
    let triangle = document.querySelector(".triangle");
    triangle.style.display = "none";

    let rules = document.querySelector(".rules");
    rules.style.display = "none";

    let container = document.querySelector("#container");
    container.style.display = "flex";


    if (hand === "rock") {
        document.getElementById("userImage").src = "images/Rockhand.png";
    } else if (hand === "paper") {
        document.getElementById("userImage").src = "images/Paperhand.png";
    } else {
        document.getElementById("userImage").src = "images/Scissorshand.png";
    }


    let computerSelection = housePick();
    referee(hand, computerSelection);
}


function housePick() {
    let hands = ["rock", "paper", "scissors"];
    let computerSelection = hands[Math.floor(Math.random() * hands.length)];

    if (computerSelection === "rock") {
        document.getElementById("computerImage").src = "images/Rockhand.png";
    } else if (computerSelection === "paper") {
        document.getElementById("computerImage").src = "images/Paperhand.png";
    } else {
        document.getElementById("computerImage").src = "images/Scissorshand.png";
    }

    return computerSelection;
}



function referee(playerSelection, computerSelection) {

    if (playerSelection == "paper" && computerSelection === "paper") {
        setDecision("It's a tie!")
    } else if (playerSelection == "rock" && computerSelection == "rock") {
        setDecision("It's a tie!")
    } else if (playerSelection == "scissors" && computerSelection == "scissors") {
        setDecision("It's a tie!")
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        setDecision("YOU LOSE!")
        setScore(SCORE -= 1)
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        setDecision("YOU LOSE!")
        setScore(SCORE -= 1)
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        setDecision("YOU LOSE!")
        setScore(SCORE -= 1)
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        setDecision("YOU WIN!")
        setScore(SCORE += 1)
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        setDecision("YOU WIN!")
        setScore(SCORE += 1)
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        setDecision("YOU WIN!")
        setScore(SCORE += 1)
    }

}

function setDecision(decision) {
    document.querySelector(".decision p").innerText = decision;
}

function setScore(score) {
    document.querySelector(".score-count").innerText = score;
}


function playAgain() {
    let hands = document.querySelector(".triangle");
    hands.style.display = "flex";

    let rules = document.querySelector(".rules");
    rules.style.display = "flex";

    let contest = document.querySelector("#container");
    contest.style.display = "none";
}



function showRules() {
    let rules = document.querySelector(".rules");
    rules.style.display = "none";

    let modal = document.getElementById("rules-modal");
    modal.style.display = "flex";

    let triangle = document.querySelector(".triangle");
    triangle.style.display = "none";
}

function closeRules() {
    let triangle = document.querySelector(".triangle");
    triangle.style.display = "flex";


    let modal = document.getElementById("rules-modal");
    modal.style.display = "none";

    let rules = document.querySelector(".rules");
    rules.style.display = "flex";
}