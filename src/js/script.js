const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
const calButton = document.querySelector('.jsCalculate');
const clearButton = document.querySelector('.jsClear');
display.textContent = '0';


let add = (a, b) => a + b; //addition
let subtract = (a, b) => a - b; //subtraction 
let multiply = (a, b) => a * b; //multiplication
let divide = (a, b) => a / b; //division

//operate function
let operate = (a, op, b) => {
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return subtract(a, b);
    } else if (op === '*') {
        return multiply(a, b);
    } else if (op === '/') {
        return divide(a, b);
    }
};

//event listener for buttons
buttons.forEach((button) => {
    button.addEventListener(('click'), () => {
        if (display.textContent === 0 || display.textContent === '0' || display.textContent === 'Error') {
            display.textContent = button.value;
        } else {
            display.textContent += button.value;
        }
        
    })
})

//event listener for calculate button
calButton.addEventListener('click', () => {
    let splitDisplay = display.textContent.split(/(\+|\-|\*|\/)/);
    if (splitDisplay.length < 3) {
        display.textContent = 'Error';
        return;
        }
     result = operate(Number(splitDisplay[0]), splitDisplay[1], Number(splitDisplay[2]));
     if (splitDisplay.length > 3) {
        for (let i = 3; i < splitDisplay.length; i += 2) {
           let result = operate(result, splitDisplay[i], Number(splitDisplay[i + 1]));
        }}
      display.textContent = result;
});


//event listener for clear button
clearButton.addEventListener('click', () => {
    display.textContent = '0';
});
