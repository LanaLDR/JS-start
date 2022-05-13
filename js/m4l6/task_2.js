"use strict";

const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

function getAverageValue(arr) {
    let summary = 0;
    for (let i=0; i < arr.length; i++){
        summary += arr[i];
    }
    return Math.floor(summary/arr.length);
}

console.log(getAverageValue(allCashbox));