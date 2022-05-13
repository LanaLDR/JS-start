"use strict";

const positionName = String(prompt("Наименование товара"));
const positionAmount = Number(prompt("Количество товара"));
const positionCategory = String(prompt("Категория товара"));
const positionPrice = Number(prompt("Цена товара"));
const positionPriceSum = positionPrice * positionAmount;

if (isNaN(positionAmount) && isNaN(positionPrice)){
    console.log("Вы ввели некорректные данные");
} else {
    console.log(`На складе ${positionAmount} единицы товара "${positionName}" на сумму ${positionPriceSum} деревянных.`);
}