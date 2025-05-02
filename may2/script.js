
// object literal

const person = {
    name :"jhon",
    age : 34,
    city : "london"
}

console.log(person.name)
console.log(person.city)
console.log(person.age)

console.log(person,typeof person)

//ARRAY

const numbers = [1,2,3,4,5,6]

console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])

console.log(numbers,typeof numbers)

//functions

//function declaretion

function display(){
    console.log("hello")
   // alert("hello")
}

//calling a function or invoking

display()


//operators 

 let x=10;
let y="10";

// let z=x+y;
// z=x-y;
// z=x*y;
// z=x/y;
// z=x%y;

// console.log(z)

// x++;
// x= x+1;
// x--;
// x=x-1;

// console.log(x)

//check values also data type

if(x===y){ //  === checks the value as well as datatype
    console.log(true)

}
else{
    console.log(false)
}

//concatenation

let firstname="Rohit";
let lastname="Meena";

fullname=firstname + " "+ lastname

console.log(fullname)

//string

//template literal or template string or backticks

let data=`${fullname} , I hope you understands the javascript`;

console.log(data);