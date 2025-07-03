let player1 ="Player1";
let player2 = "Player2";


function editName(){
    player1=prompt("Change player name 1")
  player2=prompt("Change player name 2")


if(player1.length<1 || player2.length<1){
    alert("Please enter a valid name");
    Return;
}

document.querySelector("p.player1")
.innerHTML = player1;

document.querySelector("p.player2")
.innerHTML = player2;
}

function rollTheDice(){
    let diceNum1=document.querySelector(".img1");
    let diceNum2=document.querySelector(".img2");

    diceNum1.setAttribute("src","diceroll.gif");
    diceNum2.setAttribute("src","diceroll.gif");

    let result = document.querySelector("h1")
    
    setTimeout(()=>{
        let randomNum1=Math.floor(Math.random()*6)+1;
        let randomNum2=Math.floor(Math.random()*6)+1;

    diceNum1.setAttribute("src","dice"+randomNum1+".jpg");
    diceNum2.setAttribute("src","dice"+randomNum2+".jpg");


    if(randomNum1 === randomNum2){
        result.innerHTML= "DRAW";
    }

    
    else if(randomNum1 < randomNum2){
        result.innerHTML= (player2 + "WINS");
    }


     else{
        result.innerHTML= (player1 + "WINS");
     }
    },2500);
}