let boxes=document.querySelectorAll(".box");//1d array
let restart=document.querySelector("#restart");
let winnerTurn=document.querySelector(".winnerTurn");
let turnO= false;
let countTurns=0;
let winArr=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8], 
    [2,4,6],
    [3,4,5],
    [6,7,8]
];//all posible winning patterns
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true; 
        }
        box.disabled=true;
        countTurns++;
        checkWinner();
    });
});
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    
}
const checkWinner=() => {
    for(let pattern of winArr){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if (pos1Val===pos2Val && pos1Val===pos3Val)
            {
                winnerTurn.classList.add('winner');
                winnerTurn.classList.remove('hide');
                winnerTurn.innerText=`Winner is ${pos1Val}!!`;
                disableBox();
                return;
            }
            if (countTurns==9){
                winnerTurn.classList.add('winner');
                winnerTurn.classList.remove('hide');
                winnerTurn.innerText=`Match Draw!\nRestart Again`
        }
    }
    }
}
const restartGame=()=>{
    countTurns=0;
    for(let box of boxes){
        turnO=false;
        box.disabled=false;
        box.innerText="";
    }
 winnerTurn.classList.add('hide');
}
restart.addEventListener("click",restartGame);
