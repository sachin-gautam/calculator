let a;
let b;
let o;


function add(a,b){
    return a+b;
    console.log(a+b);
}
function subtract(a,b){
    return a-b;
    console.log(a-b);
}
function multiply(a,b){
    return a*b;
    console.log(a*b);
}
function divide(a,b){
    return a/b;
    console.log(a/b);
}

function operate(a,b,o){
    switch(o){
        case 'add':
            add(a,b);
            break;
        case 'subtract':
            subtract(a,b);
            break;
        case 'multiply':
            multiply(a,b);
            break;
        case 'divide':
            divide(a,b);
            break;
        default:
            "invalid operation"
            break;
    }
}

const output = document.querySelector("#result");
output.textContent = '0';

const buttons = document.querySelectorAll("button");





