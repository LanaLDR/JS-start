"use strict";

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

function filter(firstArr, secondArr) {
    const successStudents = [];
    for (let i=0; i < firstArr.length; i++){
        if (!(secondArr.includes(firstArr[i]))){
            successStudents.push(firstArr[i]);
        }
    }
    return successStudents;
}

console.log(filter(allStudents, failedStudents));