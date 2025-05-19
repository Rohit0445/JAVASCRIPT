// const user = {
//     name:"Rohit" ,
//     age:"24",
//     city:"Bhopal"
// }

// console.log(user);

// //convet  object into json string

// const data = JSON.stringify(user)

// console.log(data);

// // convet  string into object

// const data1 = JSON.parse(data)

// console.log(data1);

// -------------------------------------------------------
// array object question



// const library = [
//   {
//     title:"ikagai",

//     author:"Francesc Miralles",

//     status:{
//      own : true,
//      reading : false,
//      read : false
//     }
//   },

//   {
//    title:"Pride and Prejudice",

//    author:"by Jane Austen",

//    status:{
//      own : true,
//      reading : false,
//      read : false
//     }
      

//   },

    
//   {

//    title:"Alice's Adventures in Wonderland",

//    author:"by Lewis Carroll",

//    status:{
//      own : true,
//      reading : false,
//      read : false
//     }

//   }

// ] 

// console.log(library[0].status.read)

// library[0].status.read = true 
// library[1].status.read = true
// library[2].status.read = true


// const {title:firstbook}=library[0]

// console.log(library[0].status.read)


// console.log(firstbook)

// const jsonstring = JSON.stringify(library)
// console.log(jsonstring)

// -----------------------------------------------

// let person = { name : "Alice" , age : 25, city: "Delhi"};

// let x = {
//   country : "India"
// }

//  person = {...person , ...x}

// console.log(person);   
// console.log(person.name)
// console.log(person.age)
// console.log(person.country)


// let user = {
//   username : "hellok",
//   email: "hello@gmail.com"
// }

// let account ={
//   id : 1,
//   status :  "active"
// }

// account.status = "inactive"

// console.log(account)

// let profile = {
//   name : "hello" ,
//   age : 30
// }

// console.log();

// let color = ["red" , "green"]
// color.push("blue")

// console.log((color));

// let fruits = ["apple" , "banana" , "orange"]

// let f = fruits.pop()

// console.log(fruits);
// console.log(f);


// let tasks = ["wake up" , "brush ", "eat"]
// console.log(tasks);

// tasks.shift()

// console.log(tasks);

// let steps = ["step1" , "step2"]
// steps.unshift("start")

// console.log(steps);


// let num = [10,20,30,40,50]

// let num2= num.slice(0,3)
// console.log(num);
// console.log(num2);

// let letters = ["a" , "b" , "c" , "d"]
// letters.splice(1,2)

// console.log(letters);

// let arr =[1,2,3,4]
// arr.push("x")

// console.log(arr);


//functions ---------------------------------------------------------------

function Demo(){
  console.log("Hello Function");
}

Demo()

//WRP take a input from the user and check number is odd or even using function

// function check (){
//   let num = prompt("Enter a number : ")

//   if(num%2!=0){
//     console.log("odd")
//   }

//   else{
//     console.log("Even")
//   }
// }

// check()

// WRT to take a input from the user and print reverse table of that number 

// function Revtable(){
//   let num  = prompt("Enter a number ")
//   for (i=10 ; i>0 ; i--){
//       console.log(num*i)

//   }

  
// }

// Revtable()

