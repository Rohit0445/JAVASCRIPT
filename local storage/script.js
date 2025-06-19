 let set=()=>{
    
    localStorage.setItem("name","rohit")
    localStorage.setItem("arr",JSON.stringify([1,2,3,4,5]))

    
}  

let get=()=>{
    let data = JSON.parse(localStorage.getItem("arr"))
    console.log(data);
    console.log(localStorage.getItem("name"));
}
