// // 4types of functions 

// // no returne no parameter --------------------

// function display1(){
//     console.log("hello");
// }

// display1()

// // return with no parameter---------------------------

// function display2(){
//     return "hello"
// }
// let result = display2()
// console.log(result);
// // alert(result)

// // parameter with no return------------------------

// function display3(x,y){
//     console.log(x+y);
// }

// display3(10,20)


// // parameter with  return--------------------------------


// function display4(x,y){
//     return x*y
// }

// let ans = display4(20,10)

// console.log(ans);

// //------------------------------------------------------------------------------------------------------------
// // Q1
// function name(){
//  let user = prompt("Enter your name")
//  console.log(user)
    
// }

// name()

// //q2

// function name(){
//     return "Rohit"
// }

// let output = name()

// console.log(output);

// //q3

// function cube(x){
//    let ans = x*x*x
//    console.log(ans);

// }

// cube(6)

// //objects pass in functions 

// function user1(person){
//     console.log(`persons name is ${person.name} and persons age is ${person.age}`);

// }

// user1({
//     name:"rohit",
//     age : 24
// })


// // function expression -- another type of syntex of function 

// let myfunction = function(){
//     console.log("this is function expression");
// }

// myfunction()


// // q----------------------------

// let substraction = function(x,y){
//     let ans = x-y
//     console.log(ans);
// }

// substraction(20,10)

// // arrow function -- another type of syntex of function 

// let myfunction2 = ()=>{
//     console.log("hello");
// }

// myfunction2()


//-------------------------------------------------------- TASK --------------------------------------------------------------------
//even odd with arguments or no returns-----------------------------------------------------

// function eveodd(x){
//     if(x%2==0){
//         console.log("EVEN")
//     }

//     else{
//         console.log("ODD");
//     }
// }

// eveodd(5)

//-----------------------------------------------------------------------------------

// let ob = {name: "ashu",age:24,city:"bhopal",salary:90}

// console.log(ob);

//--------------------------------------------------

//add all 10 elements of array
// function sum(){
// const arr =[1,2,3,4,5,6,7,8,9,10]

// const[a,b,c,d,e,f,g,h,i,j]=arr

// console.log(a+b+c+d+e+f+g+h+i+j);

// }

// sum()

// //area of circle
 
// function area(r){
//     let pie = 3.14
//     return pie*r*r

// }

// let ans = area(prompt("Enter redius of a circle : "))

// console.log(ans);


//IIFE------------------------------------

(function(){
   var name = "Rohit"
   alert("this is IIFE")
   console.log(name)
})()