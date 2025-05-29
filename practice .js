// let str = "Hello"
// let len = str.length

// let x = str.split("").reverse().join("")
// // pehle split krenge jisse uoput array me aaega fir reverse krenge kyunki string me reverse function nahi hota array me hota hai fir join krenge kyunki reverse array me string k ek caharacter ko ek element of array manega 

// console.log(x);

// let str = "madaM".toLowerCase()

// let rev = str.split("").reverse().join("")

// if (str==rev){
//     console.log("palindrome");
// }

// else{
//     console.log("not a palindrome");
// }


let str = "my name is rohit and i am stadying in cybrom "
let len = str.length
// console.log(len);
// let newstr = str.split("")
let count = 0
// console.log(newstr);
 let vowel = ["a","e","i","o","u"]

 for (let i=str[0] ; i<=len;i++){
    if(i==vowel[0] || i==vowel[1] || i==vowel[2] || i==vowel[3] ||i==vowel[5]){
        
        count += 1
    }
 }

 console.log(count);





