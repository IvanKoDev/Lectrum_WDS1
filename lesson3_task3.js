// ЗАДАЧА 3
// 1. Доработайте задачу из задания 2 и посчитайте сумму всех позитивных и негативных элементов.

const numbers = [-91, 18, 11, -23, -98, 28, -81, -100, -7, -45, 52, 41, 75, -98, 27, 41, 25, 2, 39, -18];

let pozitiveSum = 0;
let negativeSum = 0;
   
for (let i = 0; i < numbers.length; i++) {
   if (numbers[i] > 0) {           // проверка на позитивность
      pozitiveSum += numbers[i];   // считаем сумму позитивных элементов
   } else if (numbers[i] < 0) {    // проверка на негативность
      negativeSum += numbers[i];   // считаем сумму негативных элементов
   }
}
   
console.log('pozitiveSum: ', pozitiveSum);  // pozitiveSum:  359
console.log('negativeSum: ', negativeSum);  // negativeSum:  -561
