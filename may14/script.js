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


const library = [
  {
    title:"ikagai",

    author:"Francesc Miralles",

    status:{
     own : true,
     reading : false,
     read : false
    }
  },

  {
   title:"Pride and Prejudice",

   author:"by Jane Austen",

   status:{
     own : true,
     reading : false,
     read : false
    }
      

  },

    
  {

   title:"Alice's Adventures in Wonderland",

   author:"by Lewis Carroll",

   status:{
     own : true,
     reading : false,
     read : false
    }

  }

]

library.read = true 
console.log(library.read)

const {title:firstbook}=library[0]

console.log(library[0].title)
console.log(firstbook)

const jsonstring = JSON.stringify(library)
console.log(jsonstring)