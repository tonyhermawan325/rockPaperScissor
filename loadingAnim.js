function compareMove(userMove, compMove){

    if((this.compMove == "Paper" && this.userMove == "Rock") || (this.compMove == "Rock" && this.userMove == "Scissor") || (this.compMove == "Scissor" && this.userMove == "Paper")){
        return "Computer Win";
    }

    else if((this.compMove == "Paper" && this.userMove == "Scissor") || (this.compMove == "Rock" && this.userMove == "Paper" ) || (this.compMove == "Sissor" && this.userMove == "Rock")){
        return "userWind"
    }

    else{
        return "Tied";
    }
}

const moveset = ["Rock","Paper","Scissor"];
let userMove = document.querySelector('#userInput').value;
    compMove = moveset[Math.floor(Math.random() * moveset.length)];

const log = document.querySelector('#log');
log.textContent = compareMove(userMove, compMove);
console.log(compareMove(userMove, compMove));
