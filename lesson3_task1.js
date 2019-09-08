const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbersDZ = [];
// Запрещено использовать ++
let j = 0;
for (let i = 0; i < numbers.length; i += 1) {   // по условиям ДЗ заменяем постинкремент на +=
   if (numbers[i] % 2 === 0) {                  // проверка на четность
       evenNumbersDZ[j] = numbers[i];           // запись четного елемента в новый массив 
       j += 1;                                  // запускаем счетчик количества елементов нового массива
   }
}
console.log(evenNumbersDZ); // [ 2, 4, 6, 8, 10 ]
