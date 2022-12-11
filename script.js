// EVENTS LISTENERS 
document.getElementById("rock").addEventListener("click", rock);  
document.getElementById("paper").addEventListener("click", paper);  
document.getElementById("scissors").addEventListener("click", scissors);  
document.document.getElementById("computer_selected").style.visibility = 'hidden';


function computerplay() {
    var x = Math.floor(Math.random() * 3);
    var x = Math.floor(Math.random() * 3);
    var x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0:
            document.getElementById("computer_selected").innerHTML = "✊";
            return "ROCK";
            
        case 1:
            document.getElementById("computer_selected").innerHTML = "🖐";
            return "PAPER";
        case 2:
            document.getElementById("computer_selected").innerHTML = "✌";
            return "SCISSORS";

    }
};

document.getElementById("computer_selected").innerHTML = "X";
var user = 0;
var computer = 0;

function playRound(PlayerSelection, computerSelection) {

    if (PlayerSelection == "ROCK") {
        switch (computerSelection) {
            case 'ROCK':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log("Tie!");
                tie();
                break;
            case 'PAPER':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" COMPUTER WINS!");
                lose();
            computer = computer + 1;
                break;
            case 'SCISSORS':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" USER WINS!");
                user = user + 1;
                win();
                break;
        }
    }
    if (PlayerSelection == "PAPER") {
        switch (computerSelection) {
            case 'PAPER':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log("Tie!");
                tie();
                break;
            case 'ROCK':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" USER WINS!");
                user = user + 1;
                win();
                break;
            case 'SCISSORS':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" COMPUTER WINS!");
                computer = computer + 1;
                lose();
                break;
        }
    }

    if (PlayerSelection == "SCISSORS") {
        switch (computerSelection) {
            case 'SCISSORS':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log("Tie!");
                tie();
                break;
            case 'ROCK':
                console.log(" USER : ", PlayerSelection);
                console.log("COMPUTER : ", computerSelection);
                console.log(" COMPUTER WINS!");
                computer = computer + 1;
                lose();
                break;
            case 'PAPER':
                console.log(" USER : ", PlayerSelection);
                console.log(" COMPUTER : ", computerSelection);
                console.log(" USER WINS!");
                user = user + 1;
                document.getElementById("user_result").innerHTML = user;
                win();
                break;
        }
    }

}

function tie(){
    document.getElementById("msg").innerHTML = "Tie !";
    document.body.style.backgroundColor = '#a1a1a1';
}
function win(){

    document.getElementById("msg").innerHTML = "You Win !";
    document.body.style.backgroundColor = 'green';
    document.body.style.Color = '#fff';
result = document.getElementById("user_result").textContent;
result++;
document.getElementById("user_result").innerHTML = result;


    
}
function lose(){
    document.getElementById("msg").innerHTML = "Computer Wins.";
    document.body.style.backgroundColor = 'red';
result = document.getElementById("computer_result").textContent;
result++;
document.getElementById("computer_result").innerHTML = result;

}

function rock(){
    PlayerSelection = "ROCK";
 playRound(PlayerSelection, computerplay());
 document.getElementById("user_selected").innerHTML = "✊";
}
function paper(){
    PlayerSelection = "PAPER";
 playRound(PlayerSelection, computerplay());
 document.getElementById("user_selected").innerHTML = "🖐";
}
function scissors(){
    PlayerSelection = "PAPER";
 playRound(PlayerSelection, computerplay());
 document.getElementById("user_selected").innerHTML = "✌";
}
    const computerSelection = computerplay();


