let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.rst_btn');
let msg_container = document.querySelector(".msg-container");
let new_btn = document.querySelector(".new_btn");
let msg = document.querySelector('#msg');

let turnO = true;//We set tunrO to true if it is then it'll print O else it print X

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

const resetGame = ()=>{//It reset's the game
    turnO = true;
    enableBoxes();
    msg_container.classList.add("hide");
}

boxes.forEach((box)=>{//Box is a parameter
    box.addEventListener("click",()=>{
        console.log("Button is clicked");
        if(turnO === true){
            box.innerText = "O";
            turnO = false;//After true we assign false to it
        }
        else{
            box.innerText = "X";
            turnO = true;//After false we assign true to it
        }
        box.disabled = true;//By this winner will print only for one time
        checkWinner();//Call to checkWinner function
    })
})

const disableBoxes =()=>{//MAking a disableBoxes which will disable all buttons so that the winner will print only one value
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes =()=>{//MAking a ensableBoxes which will disable all buttons so that the winner will print only one value
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{//It shows the winner. winner is parameter
    msg.innerText = `Winner is = ${winner}`;
    msg_container.classList.remove('hide');
    disableBoxes();//Call to disableBoxes
}

const checkWinner =()=>{//arrow function
    winPatterns.forEach((pattern)=>{//winPatterns is an array in which we are checking the every element of the array and patterns is a parameter
        let pos1Val = boxes[pattern[0]].innerText;//It contain the value of boxes innerText
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`Winner is = ${pos1Val}`)
                showWinner(pos1Val);//Call to showwinner with argument
            }
        }
    })
}

reset.addEventListener("click",resetGame);
new_btn.addEventListener("click",resetGame);