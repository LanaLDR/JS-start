"use strict"

let firstNumber = Number(prompt("Введите первое число:"));
let secondNumber = Number(prompt("Введите второе число:"));
let abs = firstNumber-secondNumber;


function maxNumber(firstNumber, secondNumber) {
    return ((firstNumber+secondNumber) - Math.abs(abs))/2;
}

console.log(maxNumber(firstNumber, secondNumber));