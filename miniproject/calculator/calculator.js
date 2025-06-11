let store = ""

const dis =(value)=>{

    let screen = document.querySelector("#display")

    let temp=store.toString();

    if(value=="+"||value=="-"||value=="*"||value=="/"||value=="%"){

        if(temp.charAt(temp.length-1)=="+"||temp.charAt(temp.length-1)=="-"||temp.charAt(temp.length-1)=="*"||temp.charAt(temp.length-1)=="/"||temp.charAt(temp.length-1)=="%"){
        temp=temp.slice(0,temp.length-1);
        temp+=value;
        store=temp;
         }
        else{
           store+=value;
        }
   }
    else{
        store+=value;
    }
    screen.innerHTML=store;
}

const res=()=>{
        store=eval(store);
        let screen=document.querySelector("#display");
        screen.innerHTML=store;
}

const del=()=>{
        let screen=document.querySelector("#display");
        store=store.slice(0,-1);
        screen.innerHTML=store;
}

const clearDisplay=()=>{
        store =""
        let screen=document.querySelector("#display");
        screen.innerHTML=store;
}