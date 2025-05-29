function add(){
   
    let input1 = document.getElementById("myinput1");
    let num1= input1.value

     let input2 = document.getElementById("myinput2");
    let num2= input2.value

    console.log((num1+num2));
}


function sub(){
   
    let input1 = document.getElementById("myinput1");
    let num1= input1.value

     let input2 = document.getElementById("myinput2");
    let num2= input2.value

    console.log(num1-num2);
}



function mul(){
   
    let input1 = document.getElementById("myinput1");
    let num1= input1.value

     let input2 = document.getElementById("myinput2");
    let num2= input2.value

    console.log(num1*num2);
}



function div(){
   
    let input1 = document.getElementById("myinput1");
    let num1= input1.value

     let input2 = document.getElementById("myinput2");
    let num2= input2.value

    console.log(num1/num2);
}

// ------------------------------------------------

let str = "Welcome to the google , Bhopal, we are google student we learning js in google."

str = str.replaceAll("google","cybrom")

console.log(str);
// ------------------------------------------

function css1(){
    let body = document.getElementById("body");
    
    body.style.backgroundColor = "green"
}

function css2(){
    let body = document.getElementById("body");
    
    body.style.backgroundColor = "black"
}

function css3(){
    let body = document.getElementById("body");
    
    body.style.backgroundColor = "orange"
}


// ----------------------------------------------

let pass = ((Math.random()*5000)+1000)

console.log(pass); 

// -------------------------------------------------

const arr = [1,2,3,4,5,6,7]

let [a,b,c,d,e,f,g]=arr
let ans = a*b*c*d*e*f*g

console.log(ans);
       
