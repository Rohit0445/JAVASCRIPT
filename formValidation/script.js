let validate=()=>{
   let Name = document.querySelector("#name").Value.trim()
   let email = document.querySelector("#email").Value.trim()
   let number = document.querySelector("#number").Value.trim()
   let pass = document.querySelector("#pass").Value.trim()
   let cpass = document.querySelector("#cpass").Value.trim()


   let errname = document.querySelector("#errname")

   let erremail = document.querySelector("#erremail")

   let errnumber = document.querySelector("#errnumber")

   let errpass = document.querySelector("#errpass")

   let errcpass = document.querySelector("#errcpass")
   

   if(Name==""){
    errname.innerHTML="please Enter Name"
    return false
   }

   else if(email==""){
    erremail.innerHTML="Please enter email"
    return false
   }


   else if(number.length!=10){
    errnumber.innerHTML="Please Enter valid number "
    return false
   }


}


