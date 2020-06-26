import { add } from '../utils.js'; 
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

// get dom elements
// get add-input-1
const addInput1 = document.getElementById('add-input-1');
// get add-input-2
const addInput2 = document.getElementById('add-input-2');
// get add-button
const boogerButton = document.getElementById('add-button');
// get the add-result span
const boogerSpan = document.getElementById('add-result');

// initialize state 

// set the event handler to the button
boogerButton.addEventListener('click', () => {
    // in the click event handler . . .
    // make sure we have the inputs (console.log)
    // make sure we have the span
    // make sure we have the .values of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;

    // add the two values together
    const sum = add(value1, value2);

    // update the textContent of the span
    boogerSpan.textContent = sum;
});

const subInput1 = document.getElementById('sub-input-1');
const subInput2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResult = document.getElementById('difference');

subButton.addEventListener('click', () => {
    const value1 = subInput1.value;
    const value2 = subInput2.value;
    const difference = subtract(value1, value2);
    subResult.textContent = difference;
});

const multInput1 = document.getElementById('mult-input-1');
const multInput2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResult = document.getElementById('product');

multButton.addEventListener('click', () => {
    const value1 = multInput1.value;
    const value2 = multInput2.value;
    const product = multiply(value1, value2);
    multResult.textContent = product;
});

const divInput1 = document.getElementById('div-input-1');
const divInput2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResult = document.getElementById('quotient');

divButton.addEventListener('click', () => {
    const value1 = divInput1.value;
    const value2 = divInput2.value;
    const quotient = divide(value1, value2);
    divResult.textContent = quotient;
});
