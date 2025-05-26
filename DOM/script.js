// change CSS by JAVA SCRIPT
let h1 = document.getElementById("demo");

h1.style.color = "red";
h1.style.backgroundColor = "yellow"

let p = document.getElementById("para")

p.style.color = "red"
p.style.backgroundColor = "blue"
p.style.border = ("10px , solid , black")
p.style.borderRadius ="50px"
p.style.fontSize = "50px"


let para = document.getElementById("para")
para.style.cssText = "color:red; background-color:yellow;border:10px,solid,black;border-Radius:50px;"



function change(){
    let input = document.getElementById("myinput");
input.value = "dehli"
}

function print(){
    let input = document.getElementById("myinput").value;

    let h1 = document.getElementById("heading")
 
 

}

// the addEventListner() method attaches an event handler to the specified element.
// this is an DOM Method
// syntex------------





let button = document.getElementById("btn")
button.addEventListener("click",function(){
    console.log("button clicked");
})