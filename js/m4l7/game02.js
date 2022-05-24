"use strict";

let minNum = parseInt(prompt("Введите минимальное число диапазона:"));
let maxNum = parseInt(prompt("Введите максимальное число диапазона:"));
let arrUserNum = [];

function getNumber (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
    let range = (max-min)*0.3;
    console.log(range);
    let i = 0;
            checkNumber: while (i !== range) {
                let number = prompt("Введите число:");
                console.log(arrUserNum);
                console.log(number);
                if (typeof (+number) === "number" && number !== null){
                    if (arrUserNum.includes(number)){
                        console.log("Это число вы уже вводили");
                    } else {
                        if (+number < randomNumber) {
                            console.log("Больше!");
                            arrUserNum.push(number);
                            i++;
                        } else if(+number > randomNumber) {
                            console.log("Меньше!");
                            arrUserNum.push(number);
                            i++;
                        } else if (+number === randomNumber){
                            console.log("Вы угадали!");
                            i = range;
                            break;
                        }
                    }
                } else if (number == null) {
                    i = range;
                    break;
                } else {
                    continue checkNumber;
                }
            }
}

getNumber(minNum, maxNum);
