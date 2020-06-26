// IMPORT MODULES under test here:
// import example from '../example.js';
import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const firstNum = 5;
    const secondNum = 3;
    const expectedResult = 8;
    const actualResult = add(firstNum, secondNum);
    
    //Act 
    // Call the function you're testing and set the result to a const
  

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actualResult, expectedResult);
});

test('subtest', (expect) => {
    const firstNum = 7;
    const secondNum = 4;
    const expectedResult = 3;
    const actualResult = subtract(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('multest', (expect) => {
    const firstNum = 6;
    const secondNum = 6;
    const expectedResult = 36;
    const actualResult = multiply(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('divtest', (expect) => {
    const firstNum = 12;
    const secondNum = 4;
    const expectedResult = 3;
    const actualResult = divide(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('addTest2', (expect) => {
    const firstNum = 6;
    const secondNum = 9;
    const expectedResult = 15;
    const actualResult = add(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('addTest3', (expect) => {
    const firstNum = 8;
    const secondNum = 11;
    const expectedResult =  19;
    const actualResult = add(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('subTest2', (expect) => {
    const firstNum = 12;
    const secondNum = 8;
    const expectedResult = 4;
    const actualResult = subtract(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('subTest3', (expect) => {
    const firstNum = 9;
    const secondNum = 5;
    const expectedResult = 4;
    const actualResult = subtract(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('multTest2', (expect) => {
    const firstNum = 4;
    const secondNum = 3;
    const expectedResult = 12;
    const actualResult = multiply(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('multTest3', (expect) => { 
    const firstNum = 30;
    const secondNum = 3;
    const expectedResult = 90;
    const actualResult = multiply(firstNum, secondNum);
    expect.equal(actualResult, expectedResult);
});

test('divTest2', (expect) => {
    const firstNum = 100;
    const secondNum = 25;
    const expectedResult = 4;
    const actualResult = divide(firstNum, secondNum);
    expect.equal(expectedResult, actualResult); 
});

test('divTest3', (expect) => {
    const firstNum = 99;
    const secondNum = 3;
    const expectedResult = 33;
    const actualResult = divide(firstNum, secondNum);
    expect.equal(expectedResult, actualResult);
});
