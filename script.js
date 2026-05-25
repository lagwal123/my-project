
let display = document.querySelector(".input")

function append(text){
    if(display.value === "Error" || display.value === "Infinity"){
 display.value = text;
 return
    }
  display.value = `${display.value}${text}`;
}


function clear(){
    display.value = ""
}

function calculate(){
    try {
         display.value = eval(display.value)
    } catch (error) {
        display.value = "Error"
    }
   
}



document.querySelector("#clear").addEventListener('click',clear)


// let display = document.querySelector('.input');

// input.value = `${input.value}${(text)}`