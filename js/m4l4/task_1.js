"use strict";

let eur = prompt('Какую сумму хотите обменять?')
let getConvert = eur => (eur*1.2) * 73;
console.log(getConvert(eur));