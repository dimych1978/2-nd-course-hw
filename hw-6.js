// Дан массив:
// [1, 5, 4, 10, 0, 3]

// Создайте цикл, который будет выводить элементы массива до тех пор, пока не встретит значение  10
// После вывода значения  10 в консоль цикл должен прекратить свою работу.

let arrFromTask1 = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrFromTask1.length; i++) {
  if (arrFromTask1[i] !== 10) {
    console.log(i);
  } else {
    console.log(arrFromTask1[i]);
    break;
  }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].

// Найдите индекс значения 4 в этом массиве.

let arrFromTask2 = [1, 5, 4, 10, 0, 3];
console.log(arrFromTask2.indexOf(4));

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].

// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

let arrFromTask3 = [1, 5, 4, 10, 0, 3];
console.log(arrFromTask3.join(" "));

// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

let arrFromTask4_1 = Array(3);
let arrFromTask4_2 = Array(3);

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    arrFromTask4_2[j] = 1;
  }
  arrFromTask4_1[i] = arrFromTask4_2;
}

console.log(arrFromTask4_1);

// Задание 5
// Дан массив: [1, 1, 1]. Добавьте в конец массива значения 2, 2, 2.

let arrFromTask5 = [1, 1, 1];

for (i = arrFromTask5.length; i !== 6; i++) {
  arrFromTask5.push(2);
}
console.log(arrFromTask5);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5]. С помощью метода sort отсортируйте массив и удалите букву 'a' из массива. Затем выведите массив.

let arrFromTask6 = [9, 8, 7, "a", 6, 5];

let result6 = arrFromTask6.sort().filter(el => Number(el));
console.log(result6);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].

// Попросите пользователя угадать число с помощью метода prompt. Если значение, которое ввел пользователь, есть в массиве, выведите в alert «Угадал», в противном случае — «Не угадал».

let arrFromTask7 = [9, 8, 7, 6, 5];
let result7 = prompt(
  "Попробуйте угадать число, входящее в мой массив. Введите число"
);

if (isNaN(result7) || result7 === "") {
  alert("Нужно вводить только число");
} else {
  arrFromTask7.some(el => el === Number(result7))
    ? alert("Угадали")
    : alert("Не угадали");
}

// Задание 8
// Дана строка: 'abcdef'. Выведите в консоль 'fedcba'.

let variable8 = "abcdef";

let arrFromTask8 = Array.from(variable8).reverse().join("");
console.log(arrFromTask8);

// Задание 9
// Дан массив: [[1, 2, 3],[4, 5, 6]]. Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

let arrFromTask9 = [
  [1, 2, 3],
  [4, 5, 6],
];

let result9 = [].concat(...arrFromTask9);
console.log(result9);

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с помощью цикла for. В каждой итерации выведите в консоль сумму текущего и следующего элементов массива.

let arrFromTask10 = [];
for (i = 0; i < 10; i++) {
  arrFromTask10.push(Math.ceil(Math.random() * 10));
}
for (i = 0; i < arrFromTask10.length - 1; i++) {
  console.log(arrFromTask10[i] + arrFromTask10[i + 1]);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив квадратов этих чисел.

function squares(integers) {
  return integers.map(el => el ** 2);
}

console.log(squares(arrFromTask10));

// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.

const variable12 = ["one", "three", "two hundred"];
function arrayWordsLength(arrayWords) {
  return arrayWords.map(el => Array.from(el).length);
}

console.log(arrayWordsLength(variable12));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, а возвращает массив, содержащий только отрицательные значения.

const variable13 = [1, -3, 0, -4, 4];

function negativeNumber(integers) {
  let result13 = integers.filter(el => el < 0);
  return result13;
}

console.log(negativeNumber(variable13));

// Задание 14
// Создайте массив, состоящий из 10 значений. Значения массива необходимо сгенерировать с помощью метода Math.random() в диапазоне от 0 до 10.

// В данном массиве найдите все четные значения и добавьте их в новый массив. Результат работы программы необходимо вывести в консоль — это будут два массива: исходный массив и массив с четными значениями.

let arrFromTask14 = [];

for (i = 0; i < 10; i++) {
  arrFromTask14.push(Math.ceil(Math.random() * 10));
}

let result14 = arrFromTask14.filter(el => el % 2 === 0);
console.log(arrFromTask14, result14);

// Задание 15
// Создайте массив, состоящий из 6 элементов. Элементы массива необходимо сгенерировать с помощью Math.random() в диапазоне от 1 до 10.

// Требуется найти среднее арифметическое этих цифр, результат программы вывести в консоль.

let arrFromTask15 = [];

for (i = 0; i < 6; i++) {
  arrFromTask15.push(Math.ceil(Math.random() * 10));
}
let average =
  arrFromTask15.reduce((acc, num) => acc + num) / arrFromTask15.length;
console.log(arrFromTask15);
console.log(average);
