"use strict";

let income = Number(prompt("Сумма вашего дохода?"));
let tax = 0;

if (income <= 15000) {
    tax = income * 0.13;
} else if (income > 15000 && income <= 50000) {
    tax = income * 0.2;
} else {
    tax = income * 0.3;
}

let incomeAfterTaxes = income - tax;

console.log(incomeAfterTaxes)