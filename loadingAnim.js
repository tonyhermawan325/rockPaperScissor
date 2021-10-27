function compareMove(plyMove, cmpMove){
    if((cmpMove == 'Paper' && plyMove == 'Rock') || (cmpMove == 'Rock' && plyMove == 'Scissor') || (cmpMove == 'Scissor' && plyMove == 'Paper')){
        return "Computer Win";
    }

    else if((cmpMove == 'Paper' && plyMove == 'Scissor') || (cmpMove == 'Rock' && plyMove == 'Paper' ) || (cmpMove == 'Scissor' && plyMove == 'Rock')){
        return "Player Win";
    }

    else{
        return "Tied";
    }
}

function verify_userMove(userMove, log){
    if ((this.userMove == "Rock") || (this.userMove == "Paper") || (this.userMove == "Scissor")){
        return true;
    }
    else if (this.userMove == ""){
        log.textContent = "Please, enter your move";
        return false;
    }
    else{
        log.textContent = "Invalid Move!";
        return false;
    }
}
    
function playRound(){
    let userMove_verified = new Boolean(false);
    const moveset = ["Rock","Paper","Scissor"];
    let userMove = document.querySelector('#userInput').value;
    let compMove = moveset[Math.floor(Math.random() * moveset.length)];
    const log = document.querySelector('#log');

    userMove_verified = verify_userMove(userMove, log);

    if(userMove_verified == true){
        log.textContent = compareMove(userMove, compMove);
        document.querySelector('#compInput > p').textContent = compMove;
        console.log(document.querySelector('#compInput > p'));
    }
}

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', updateButton);

function reset(){


}


function updateButton(e){
    if(e.target.getAttribute("value") == "Play!" || e.target.getAttribute("value") == "Play Again?" ){
        playRound();
        e.target.value = "Play Again?";
    }

}

