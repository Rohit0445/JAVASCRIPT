// let d = new Date();

// const year = d.getFullYear()
// const month = d.getMonth()
// const date = d.getDate()
// const day = d.getDay()
// const min = d.getMinutes()
// const sec = d.getSeconds()
// const millisec = d.getMilliseconds()

// console.log(d);
// console.log(month);
// console.log(date);
// console.log(day);
// console.log(min);
// console.log(sec);
// console.log(millisec);

let d = new Date( );

const day = d.getDay();

switch(day){
    case 0 : console.log("sunday");
    break;
    case 1 : console.log("monday");
    break;
    case 2 : console.log("tuesday");
    break;
    case 3 : console.log("wednesday");
    break;
    case 4 : console.log("thursday");
    break;
    case 5 : console.log("friday");
    break;
    case 6 : console.log("saturday");
    break;
    

}