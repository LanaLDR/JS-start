"use strict";

let income = Number(prompt("Сумма вашего дохода?"));
let tax = 0;

if (income <= 15000) {
    tax = income * 0.13
    let incomeAfterTaxes = income - tax;
    console.log(incomeAfterTaxes)
} else if (income > 15000 && income <= 50000) {
    tax = 15000 * 0.13;
    let firstTax = 15000 - tax;
    income = income - 15000;
    tax = income * 0.2;
    let secondTax = income - tax;
    let incomeAfterTaxes = firstTax + secondTax;
    console.log(incomeAfterTaxes)
} else {
    tax = 15000 * 0.13;
    let firstTax = 15000 - tax;
    income = income - 15000;
    tax = 35000 * 0.2;
    let secondTax = 35000 - tax;
    income = income - 35000;
    tax = income * 0.3;
    let thirdTax = income - tax;
    let incomeAfterTaxes = firstTax + secondTax + thirdTax;
    console.log(incomeAfterTaxes)
}


