"use strict";

let arrLength = Number(prompt("Введите длину массива"));
let firstNum = -5;
let secondNum = 10;

function getArr(length, firstStep, secondStep) {
    let newArr;
    if (firstStep > secondStep){
        newArr = [... Array (length)].map (() => Math.floor(Math.random () * (firstStep - secondStep + 1)) + secondStep);
    } else {
        newArr = [... Array (length)].map (() => Math.floor(Math.random () * (secondStep - firstStep + 1)) + firstStep)
    }
    return newArr;
}

console.log(getArr(arrLength, firstNum, secondNum));