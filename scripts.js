let a;
let b;
let o;

const digits=[0,1,2,3,4,5,6,7,8,9];

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
output.textContent = 'Result';
const buttons = document.querySelectorAll("button");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const input = button.textContent;
        while(input!='')
        output.textContent = input;
    })
});



