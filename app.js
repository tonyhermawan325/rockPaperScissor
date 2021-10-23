const move = ['Rock','Paper','Scissor'];
let playerPoint,
    computerPoint,
    playerMove,
    computerMove;

playerPoint = 0;
computerPoint = 0;

computerMove = randomizeCompMoves(move);
playerMove = playerMoveAssignment();
for(let i = 0; i < 5; i++){
    computerMove = randomizeCompMoves(move);
    playerMove = playerMoveAssignment();

    playRound(computerMove, playerMove);

    console.log ("Player : " + playerPoint + " Computer : " + computerPoint );
}

if(playerPoint < computerPoint){
    console.log("Player Lose")
}

else if(playerPoint > computerPoint){
    console.log("Player Win");
}

else
    console.log("tied");




function randomizeCompMoves (moveset){
    return moveset[Math.floor(Math.random() * moveset.length)];
}

function playerMoveAssignment(){
    return window.prompt("fillthis");
}

function playRound (cmpMove, plyMove){
    if((cmpMove == 'Paper' && plyMove == 'Rock') || (cmpMove == 'Rock' && plyMove == 'Scissor') || (cmpMove == 'Scissor' && plyMove == 'Paper')){
        computerPoint++;
        console.log("Computer Win");
    }

    else if((cmpMove == 'Paper' && plyMove == 'Scissor') || (cmpMove == 'Rock' && plyMove == 'Paper' ) || (cmpMove == 'Scissor' && plyMove == 'Rock')){
        playerPoint++;
        console.log("Player Win");
    }

    else{
        console.log("Tied")
    }
}
