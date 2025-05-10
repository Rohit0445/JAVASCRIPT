//----------------ARRAY --------------------------------

//ARRAY LITERAL


const numbers = [1,2,3,4,5,6];

console.log(numbers[0])
let a = numbers[1]

console.log(a)

// constructor

const colors = new Array();

colors[0] = "red"
colors[1] = "black"
colors[2] = "blue"
colors[3] = "orrange"

console.log(colors)

// MIXED ARAY 

const mixed = [10,20,"Rohit",true,{age:23,city:"bhopal"}]

console.log(mixed[0])
console.log(mixed[2])
console.log(mixed[4].age)


let x 
x= numbers.length // returns lenth of the array

  
console.log(x)

x = numbers.slice(1,4) // returns but not change original array

console.log(x)


x = numbers.splice(1,2) // remove elements  change the orriginal array

console.log(x)

x = numbers.splice(0,3,10,20,30)

console.log(numbers)



// channing


arr = [1,2,3,4,5,6,7,8,9]

x= arr.slice(1,4).reverse().toString().charAt(0);

console.log(x)


const fruits = ["apple", "orrange", "mango"]
const veg = ["potato" , "tomato" , "peas"]

let full = [fruits,veg]

console.log(full)

console.log(full[1][0])



const fruits1 = ["apple", "orrange", "mango"]
const veg1 = ["potato" , "tomato" , "peas"]

let full1 = [fruits1, veg1]

console.log(full1)

console.log(full1[1][2])




