// // For loop 

// for (let i =1; i<=10 ; i++){
//     console.log(i);
// }


// for (let i = 1; i<=100; i++){
//     if (i%2==0){ 
//         console.log(i,"Even");

//     }
    
// }

// // while loop

// let i=1;
// while(i<=100){
//     console.log(i);
//     i++;
// }

// // do while

// let y =11;
// do{
//     console.log(y);
//     y++
// }
// while(y<20)

// //for in loop 

// // for in with  object
// const person = {
//     name : "Rohit",
//     age : 25,
//     city : "bhopal"
// }

// for (let x in person ){
//     console.log(person[x]);
// }

// // for in with array 

// const number =[10,20,30,40,50,60]

// for (let x in number){
//     console.log(number[x]);
// }

// // for of loop 

// let str = "javascript"

// for (let x of str){
//     console.log(x);
// }

// // for each loop 

//  const numbers =[45,4,9,253,,13];

//  let text = ""

// numbers.forEach(myfunction)

// function myfunction(x){
//     text += x + " "
// }
 
// console.log(text);


// const arr = [10,20,30,40]

//  let sqr = 0

//  arr.forEach(myfunction1)

//  function myfunction1(x){
//     sqr = x*x 
//     console.log(sqr);
//  }


//  map( ) method 

const fruits = ["apple","cherry","kiwi","grapes"];

let text = "<ul>"

fruits.map(function(x){
    text += `<li>${x}</li>`;
});

text += "</ul>";

document.getElementById("demo").innerHTML = text;


const person = [{
    name : "Rohit",
    age : 24
},
{
    name : "Suryansh",
    age : 24
},

{
    name : "Shreyansh",
    age : 24
}
];

let table = 
   `<table border + 1px>
   <tr>
   <th>Nmae</th> 
   <th>Age</th>
   </tr> `;


   person.map((x)=>{
    table+= `
    <tr>
        <td>${x.name}</td>
        <td>${x.age}</td>
    </tr>  
    `
   })

table += "</table>"

document.getElementById("mytable").innerHTML = table


// filter   

 const number =[10,20,30,4050,60,70,809,0,9]

 const newarr = number.filter(function(x){
    if(x>30){
        return x
    }
 })

 console.log(newarr);

 