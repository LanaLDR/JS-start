"use strict";

let arrLength = Number(prompt("Введите длину массива"));

function getArr(length) {
    const newArr = [... Array (length)].map (() => Math.floor (Math.random () * 100));
    return newArr;
}

console.log(getArr(arrLength));