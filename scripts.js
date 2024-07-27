function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate(a,b,o){
    switch(o){
        case '+':
            return add(a,b);
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a,b);
            break;
        case '/':
            return divide(a,b);
            break;
        default:
            "invalid operation"
            break;
    }
}

const output = document.querySelector("#result");
output.textContent = '';

const buttons = document.querySelectorAll("button");

let input = [];
const operators = ['+','-','x','/']


buttons.forEach(button => {
    button.addEventListener("click", () => {
        let displayResult = 0;
        if(button.textContent == '='){

            if(input.length === 0) return;

            displayResult = 0;
            let firstValue = 0;
            let secondValue = 0;
            let operator = '';
            const operatorPos = input.findIndex(element => operators.includes(element));
            // Combine elements before the operator into one number
            firstValue = parseInt(input.slice(0, operatorPos).join(''));
            console.log(firstValue);
            // Combine elements after the operator into one number
            secondValue = parseInt(input.slice(operatorPos + 1).join(''));
            // Get the operator
            operator = input[operatorPos];
            // Display the result

            displayResult = operate(firstValue,secondValue,operator);
            console.log(displayResult);
            output.textContent = displayResult;
            input.length = 0;
            // console.log(button.textContent)
        }
        else if(button.textContent == 'AC'){
            output.textContent = '';
            input.length = 0;
        }
        else{
            updateDisplay(button);
            appendInput(button);
        }
        
    });
});

function appendInput(button){
    input.push(button.textContent);
}

function updateDisplay(button){
    if(button.className != "operator"){
        output.textContent += button.textContent;
    }
    else if(button.textContent == 'AC'){
        output.textContent = '';
    }
    // else if(button.textContent == '+'){
    //     output.textContent = '';    
    //     output.textContent = '+';
    // }
    else{
        output.textContent = button.textContent;
    }
}





