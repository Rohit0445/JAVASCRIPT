// spread operator (...)

//it copies a part of an array or a compelete array to another array

// const num1 = [10,20,30,40,50];

// const num2 = [60,70,80,90,100];

// const num3 = [...num1, ...num2]

// console.log(num3)


//isArray , .from

// const x = Array.isArray(num1);
// console.log(x)

// const y = Array.from('12356')
// console.log(y)

//destructuring

// const arr = [1,2,3,4,5,6,7]

// const [a,b,c,d,e,...rest]  = arr

// console.log(a,b,c,d,e)

// console.log(rest)

// const arr = [1,2,3,4,5];

//  arr.push(6)
//  arr.unshift(0)
//  arr.reverse()

// console.log(arr)



// const arr1 = [1,2,3,4,5];

// const arr2 = [5,6,7,8,9,10];

// const arr3 = [...arr1,...arr2]
// arr3.splice(5,1)

// console.log(arr3)


// // object Literals

const person = {
    name : "rohit",
    age : 25,
    isEligible : true,
    address : {
        state : "MP",
        country : "INDIA"

    },
    hobbies:["dance", "singing"],

    greet : function(){
        console.log("hello");
    }

}

person.age = 67
person.surname = "meena"

console.log(person.name) //.notation k through 

console.log(person['name']) //[] k through 

console.log(person.isEligible)
console.log(person.address.country)
console.log(person.hobbies[1])
person.greet()
console.log(person.age)
console.log(person.surname)

// spread operator in object

const obj1 = {
    a:10,
    b:20
} 

const obj2 = {
    c:30,
    d:40
} 


const obj3 = {
    ...obj1 , ...obj2
}

console.log(obj3)


//Array of object 

const student=  [
    {name:"Rohit" ,  id : 1 , course : "python FSD"},
    {name:"Hrishabh" ,  id : 2 , course : "AIML "},
    {name:"Ajay" ,  id : 3, course : "java FSD"},
    {name:"Abhishek" ,  id : 4 , course : "mernstack"}
]

console.log(student[0].name)
console.log(student[1].name + " " + student[1].id + " " + student[1].course)
console.log(`${student[2].name} , ${student[2].id } , ${student[2].course}   `)


//destructuring

const car = {
    color : "red",
    model : "2024",
    brand : "ford"
}




// -----------------------------------------------------------------------------------------

// arr = []

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// x = prompt("Enter any value ")

// arr.push(x)

// console.log(arr)

// --------------------------------------------------

// arr = [1,2,3,4,5,6,7,8,9,10]

// ans = arr[0] + arr[1]  + arr[2]  + arr[3]  + arr[4] + arr[5]  + arr[6]  + arr[7]  + arr[8]  + arr[9]

// console.log(ans)

// ------------------------------------------------

// str = prompt("Enter your Nmae")

// let x = str.

// console.log(x)

// -----------------------------------------------

// let d = new Date();

// date = d.toDateString()

// time = d.toTimeString()

// console.log(date , time)

// console.log(Math.floor(Math.random()*15))

