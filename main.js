// VARIABLES
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const mulButton = document.querySelector("#mul");
const divButton = document.querySelector("#div");

const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const button0 = document.querySelector("#zero");

const clearButton = document.querySelector("#clear");
const calcButton = document.querySelector("#calc");

const calculation = document.querySelector(".calculation");
const result = document.querySelector(".result");

// RUNNING CODE
clearButton.addEventListener('click', (e) => {
    calculation.textContent = "";
    result.textContent = "";
});

addButton.addEventListener('click', (e) => {
    calculation.textContent += " + ";
});
subButton.addEventListener('click', (e) => {
    calculation.textContent += " - ";
});
mulButton.addEventListener('click', (e) => {
    calculation.textContent += " * ";
});
divButton.addEventListener('click', (e) => {
    calculation.textContent += " / ";
});

button1.addEventListener('click', (e) => {
    calculation.textContent += "1";
});
button2.addEventListener('click', (e) => {
    calculation.textContent += "2";
});
button3.addEventListener('click', (e) => {
    calculation.textContent += "3";
});
button4.addEventListener('click', (e) => {
    calculation.textContent += "4";
});
button5.addEventListener('click', (e) => {
    calculation.textContent += "5";
});
button6.addEventListener('click', (e) => {
    calculation.textContent += "6";
});
button7.addEventListener('click', (e) => {
    calculation.textContent += "7";
});
button8.addEventListener('click', (e) => {
    calculation.textContent += "8";
});
button9.addEventListener('click', (e) => {
    calculation.textContent += "9";
});
button0.addEventListener('click', (e) => {
    calculation.textContent += "0";
});

calcButton.addEventListener('click', (e) => {
    let input = calculation.textContent.split(" ");
    let x = 0, y = 0, operator = "+", tot = 0;
    for (; input.length > 1 ;) {
        x = input.shift();
        operator = input.shift();
        y = input.shift();
        tot = operate(operator, x, y);
        input.unshift(tot);
    } 
    result.textContent = ` = ${tot}`;
});


// FUNCTIONS

function add(x, y) {return x + y;}
function subtract(x, y) {return x - y;}
function multiply(x, y) {return x * y;}
function divide(x, y) {return x / y;}

function operate(operator, x, y) {
    if (operator == "+") {return add(parseInt(x), parseInt(y))}
    else if (operator == "-") {return subtract(parseInt(x), parseInt(y))}
    else if (operator == "*") {return multiply(parseInt(x), parseInt(y))}
    else if (operator == "/") {return divide(parseInt(x), parseInt(y))}
}