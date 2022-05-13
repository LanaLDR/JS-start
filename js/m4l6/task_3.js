"use strict";

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix (arr, prefix) {
    for (let i = 0; i < arr.length; i++){
        arr[i] = `${prefix} ${arr[i]}`;
    }
    return arr;
}

console.log(addPrefix(names, "Mr"));