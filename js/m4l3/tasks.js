"use strict";

function randomInteger(min, max) {
    let rand = Math.random();
    return Math.round(rand);
}

const rain = randomInteger(0, 1);

if (rain === 1){
    console.log("Пошёл дождь. Возьмите зонт!");
}

if (rain === 0){
    console.log("Дождя нет!");
}

let pointsMath = Number(prompt("Введите кол-во баллов по математике:"));
let pointsRus = Number(prompt("Введите кол-во баллов по русскому языку:"));
let pointsInform = Number(prompt("Введите кол-во баллов по информатике:"));

if ((pointsRus + pointsMath + pointsInform) >= 265){
    console.log("Поздравляю, вы поступили на бюджет!");
} else {
    console.log("Увы, баллов недостаточно");
}

let requiredAmount = Number(prompt("Какую сумму хотите снять?"));

if (requiredAmount % 100 > 0) {
    console.log("К сожалению, таких купюр нет");
} else {
    console.log("Операция подтверждена!");
}