// Math object

let pi = Math.PI;

a = Math.abs(-78); //convert negetive into positive

b = Math.sign(6); //returns -1 if num is negative other vise returns 1

c = Math.sqrt(49); // returns square root 

d = Math.round(4.567); // returns roundoff value

e = Math.ceil(4.1); // returns upper value 

f = Math.floor(4.9); // returns actual value 

g = Math.trunc(45.5454);  // returns integer value 

h = Math.min(45,34,0,-24,-2324,-10); // returns minimum value 


i = Math.max(45,34,0,-24,-2324,-10); // returns maximum value 

j = Math.pow(2,3); // put the power on a number 

k = Math.random(); // returns the random nnumber between 0-1

l = Math.floor(Math.random()*11); //returns random number between 0-10

m = Math.floor(Math.random()*100)+1

// console.log(pi,a,b,c,d,e,f,g,h,i,j,k,l,m)


let x = Math.floor(Math.random()*100);
let y = Math.floor(Math.random()*50);

let sum = x+y;
let diff = x-y;
let product = x*y;
let quotient = x/y;
let remainder = x%y;

console.log(x ,"+",y,"sum of these number is :", sum )

console.log(x ,"-",y,"difference of these number is :", diff )

console.log(x ,"*",y,"product of these number is :", product )

console.log(x ,"/",y,"sum of these number is :", quotient )

console.log(x ,"%",y,"remainder of these number is :", remainder )


// Date object

let date = new Date();
// by default  , Java script will use the browers time zone and display a date as a full string 

// there are 4 ways to create new Date object 

//new Date () , it will retyrns the current date 

// new Date (year,month,day,hour,minute,secon,millisecond )--from 1 jan of 1970 

//new Date(Date string)

console.log (date);


