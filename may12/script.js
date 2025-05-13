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

const arr = [1,2,3,4,5];

 arr.push(6)
 arr.unshift(0)
 arr.reverse()

console.log(arr)



const arr1 = [1,2,3,4,5];

const arr2 = [5,6,7,8,9,10];

const arr3 = [...arr1,...arr2]
arr3.splice(5,1)

console.log(arr3)


// object Literals

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

console.log(person.name) //.notation k through 

console.log(person['name']) //[] k through 

console.log(person.isEligible)
console.log(person.address.country)
console.log(person.hobbies[1])
person.greet()