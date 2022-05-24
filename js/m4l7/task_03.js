"use strict";

let arrLength = Number(prompt("Введите длину массива"));
let firstNum = -5;
let secondNum = 10;
let parity = "odd";

function getArr(length, firstStep, secondStep, parity) {
    let newArr;
    if (firstStep > secondStep){
        newArr = [... Array (length)].map (() => Math.floor(Math.random () * (firstStep - secondStep + 1)) + secondStep);
    } else {
        newArr = [... Array (length)].map (() => Math.floor(Math.random () * (secondStep - firstStep + 1)) + firstStep)
    }
    if (parity === "odd") {
        newArr = newArr.filter(items => !(items % 2) && !(items == 0));
    } if (parity === "even") {
        newArr = newArr.filter(items => items % 2);
    }
    return newArr;
}

console.log(getArr(arrLength, firstNum, secondNum, parity));