"use strict";


function getNumber () {
    let randomNumber = Math.floor(Math.random() * 101);

    console.log(randomNumber);
    checkNumber: while (randomNumber) {
        let number = prompt("Введите число:");
        console.log(number);
        if (typeof (+number) === "number" && number !== null){
            if (+number < randomNumber) {
                console.log("Больше!")
            } else if(+number > randomNumber) {
                console.log("Меньше!");
            } else if (+number === randomNumber){
                console.log("Вы угадали!");
                break;
            }
        } else if (number == null) {
            break;
        } else {
            continue checkNumber;
        }
    }
}

getNumber();
