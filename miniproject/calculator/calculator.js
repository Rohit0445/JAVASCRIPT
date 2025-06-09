let store = ""

let dis = (value)=>{

    let screen = document.querySelector("#display")

    store = store+value

    screen.innerHTML=store
}