// ЗАДАЧА 2
// 1. Посчитайте количество элементов которе больше нуля.
// 2. Посчитайте количество элементов которе меньше нуля.


const numbers = [-91, 18, 11, -23, -98, 28, -81, -100, -7, -45, 52, 41, 75, -98, 27, 41, 25, 2, 39, -18];
   
let pozitiveCount = 0;
let negativeCount = 0;
   
for (let i = 0; i < numbers.length; i++) {
       
   if (numbers[i] > 0) {         // проверка на позитивность
      pozitiveCount++;           // считаем кол-во позитивных элементов
   } else if (numbers[i] < 0) {  // проверка на негативность
      negativeCount++;           // считаем кол-во негативных элементов
   }
}
   
console.log('pozitiveCount: ', pozitiveCount);  // pozitiveCount:  11
console.log('negativeCount: ', negativeCount);  // negativeCount:  9
