// Function to compare comp and user move and display the result on log
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
// Function to verify userInput
function verify_userMove(userMove, log){
    if ((userMove == "Rock") || (userMove == "Paper") || (userMove == "Scissor")){
        return true;
    }
    else if (userMove == ""){
        log.textContent = "Please, enter your move";
        return false;
    }
    else{
        log.textContent = "Invalid Move!";
        log_userInput.value = "";
        return false;
    }
}
// Randomize comp move and call verify_userMove and compareMove    
function playRound(){
    let userMove_verified = new Boolean(false);
    let userMove = document.querySelector('#userInput').value;
    let compMove = moveset[Math.floor(Math.random() * moveset.length)];
    userMove_verified = verify_userMove(userMove, log);
    console.log(userMove_verified);
    if(userMove_verified == true){
        log.textContent = compareMove(userMove, compMove);
        log_compInput.textContent = compMove;
        console.log(log_compInput);
    }
}
// resetting all display data after clicking reset button
function resetGame(){
    log.textContent = log.getAttribute("data-placeholder");
    console.log(log.getAttribute("data-placeholder"));
    log_compInput.textContent = log_compInput.getAttribute("data-default-placeholder");
    playButton.value = playButton.getAttribute("data-defaultValue");
    log_userInput.value = "";
}

// play the game after clicking play button
function playGame(e){
    if((e.target.getAttribute("value") == "Play!") || (e.target.getAttribute("value") == "Play Again?")){
        console.log(e);
        playRound();
        e.target.value = "Play Again?";
    }
}
    


const moveset = ["Rock","Paper","Scissor"];
const log = document.querySelector('#log');
const log_compInput = document.querySelector('#compInput > p');
const log_userInput = document.querySelector('#userInput');

const playButton = document.querySelector('#playButton');
playButton.addEventListener('click', playGame);
const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetGame); 






