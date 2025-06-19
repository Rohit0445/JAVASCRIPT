let validate=()=>{
   let Name = document.querySelector("#name").value.trim()
   let email = document.querySelector("#email").value.trim()
   let number = document.querySelector("#number").value.trim()
   let pass = document.querySelector("#pass").value.trim()
   let cpass = document.querySelector("#cpass").value.trim()


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

   else if(!(email.includes("@") && email.includes(".com"))){
      erremail.innerHTML="Enter valid Email"
      return false
   }


   else if(number.length!=10){
    errnumber.innerHTML="Please Enter valid number "
    return false
   }

   else if(isNaN(number)){
      errnumber.innerHTML="Please Enter Only number"
      return false
   }

   else if(pass!=cpass){
      errcpass.innerHTML="password dont match"
      return false
   }

   else if(!(pass.match(/[1234567890]/)&&
             pass.match(/[!@#$%^&*()]/)&&
            pass.match(/[a-z]/)&&
         pass.match(/[A-Z]/))){
            errpass.innerHTML="Please create strong password"
            return false
         }


}


