"use strict"

let number = Number(prompt("Введите число"));

function isPrime(number){
    let stepNumber = 0;
    for (let i=1; i<=number; i++){
        if ((number%i) === 0) {
            stepNumber++;
        }
    }
    if (stepNumber===2){
        return "True";
    } else {
        return "False";
    }
}

console.log(isPrime(number))