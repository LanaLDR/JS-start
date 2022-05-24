'use strict';

/*
const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    getTotalPrice() {
        return this.totalPrice;
    },
    add (posName, posPrice, posCount=1) {
        this.increaseCount(posCount);
        this.items.push({posName, posPrice, posCount});
        this.calculateItemPrice();
    },
    increaseCount(number) {
        this.count+=number
    },
    calculateItemPrice(){
        let total = 0;
        for (let i=0; i < this.items.length; i++){
            total += (this.items[i].posPrice * this.items[i].posCount);
        }
        this.totalPrice = total;
    },
    clear(){
        this.items = [];
        this.totalPrice = 0;
        this.count = 0;
    },
    print(){
        let cartStr = JSON.stringify(cart.items);
        console.log(cartStr);
        console.log(this.totalPrice);
    },
}

cart.add("Айфон", 2000, 3);
cart.add("Диван", 3000);
cart.add("Машина", 5000, 4);
console.log(cart.items);
console.log(cart.count);
cart.print();
cart.clear();*/

const cart = {
  items: [],
  get totalPrice() {
    return (this.calculateItemPrice());
  },
  count: 0,
  add(posName, posPrice, posCount = 1) {
    this.increaseCount(posCount);
    this.items.push({posName, posPrice, posCount});
    this.totalPrice;
  },
  increaseCount(number) {
    this.count += number;
  },
  calculateItemPrice() {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += (this.items[i].posPrice * this.items[i].posCount);
    }
    return total;
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    const cartStr = JSON.stringify(cart.items);
    console.log(cartStr);
    console.log(this.totalPrice);
  },
};

cart.add('Айфон', 2000, 3);
cart.add('Диван', 3000);
cart.add('Машина', 5000, 4);
console.log(cart.items);
console.log(cart.count);
console.log(cart.totalPrice);
// cart.print();
// cart.clear();
