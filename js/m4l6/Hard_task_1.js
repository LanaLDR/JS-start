"use strict";

const allCashbox = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];

function getAveragePriceGoods (arr) {
    let [x,y] = arr[0];
    let summaryPosition = 0;
    let summaryPrice = 0;
    x = [x];
    y = [y];
    for (let i=1; i < arr.length; i++){
        x.push(arr[i][0]);
        y.push(arr[i][1]);
    }
    for (let i = 0; i < x.length; i++) {
        summaryPosition += x[i];
    }
    for (let i = 0; i < y.length; i++) {
        summaryPrice += y[i];
    }
    return summaryPrice/summaryPosition;
}

console.log(getAveragePriceGoods(allCashbox));