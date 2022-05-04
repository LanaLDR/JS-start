"use strict";

const positionName = String(prompt("Наименование товара"));
const positionAmount = Number(prompt("Количество товара"));
const positionCategory = String(prompt("Категория товара"));
const positionPrice = Number(prompt("Цена товара"));

console.log(typeof positionName);
console.log(typeof positionCategory);
console.log(typeof positionAmount);
console.log(typeof positionPrice);

const positionPriceSum = positionPrice * positionAmount;

console.log(`На складе ${positionAmount} единицы товара "${positionName}" на сумму ${positionPriceSum} деревянных.`);