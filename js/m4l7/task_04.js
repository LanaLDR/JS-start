"use strict";


let firstYear = prompt ('Введите начальный год диапазона');
let secondYear = prompt ('Введите год окончания диапазона');

function getYears (firstRange, secondRange){
    let leapYears = [];
    if (firstRange > secondRange){
        for (let y = secondRange; y <= firstRange; y++) {
            if (new Date (y, 1, 29).getDate () == 29)leapYears.push(y);
        }
    } if (secondRange > firstRange) {
        for (let y = firstRange; y <= secondRange; y++) {
            if (new Date (y, 1, 29).getDate () == 29) leapYears.push(y);
        }
    }
    return leapYears;
}
console.log(getYears(firstYear, secondYear))