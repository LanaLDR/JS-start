"use strict";

function calculate (firstNum, secondNum) {
    while(firstNum !== 0 && secondNum !== 0){
        if (firstNum > secondNum){
            firstNum = firstNum % secondNum;
        } else {
            secondNum = secondNum % firstNum;
        }
    }
    return firstNum+secondNum;
}

console.log(calculate(110,505));