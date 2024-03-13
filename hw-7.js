// Задание 1
// Преобразовать строку 'js' в верхний регистр.

let variableFromTask1 = "js";
let resultFromTask1 = variableFromTask1.toUpperCase();
console.log(resultFromTask1);

// Задание 2
// Создать функцию, которая принимает массив строк и строку. Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. Регистр символов не влияет на результат.

let arrFromTask2 = ["Сегодня", "седьмое", "марта", "2024", "года"];
let variableFromTask2 = "с";

function arrayStartingWithWord(arr, str) {
  return arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(arrayStartingWithWord(arrFromTask2, variableFromTask2));

// Задание 3
// Округлить число 32.58884:

// До меньшего целого.
// До большего целого.
// До ближайшего целого.

const numberFromTask3 = 32.58884;

let lowestInteger = Math.floor(numberFromTask3);
let highestInteger = Math.ceil(numberFromTask3);
let nearestInteger = Math.round(numberFromTask3);

console.log(lowestInteger, highestInteger, nearestInteger);

// Задание 4
// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

const arrFromTask4 = [52, 53, 49, 77, 21, 32];

let minNumber = Math.min.apply(null, arrFromTask4);
let maxNumber = Math.max.apply(null, arrFromTask4);

console.log(
  "Просто вставить числа",
  Math.min(52, 53, 49, 77, 21, 32),
  Math.max(52, 53, 49, 77, 21, 32)
);
console.log("С использованием константы", minNumber, maxNumber);

// Задание 5
// Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function random() {
  console.log(Math.floor(Math.random() * 10 + 1));
}
random();

// Задание 6
// Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. Длина массива должна быть в два раза меньше переданного числа.

function randomToInteger(integer) {
  const arrFromTask6 = [];
  let number;
  for (i = 0; i < integer / 2; i++) {
    number = Math.round(Math.random() * integer);
    arrFromTask6.push(number);
  }
  return arrFromTask6;
}

// Задание 7
// Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function randomBetweenIntegers(int1, int2) {
  let resultFromTask7;
  if (int1 === int2) alert("Введите разные значения чисел");
  if (int1 > int2) {
    resultFromTask7 = int2 + Math.round(Math.random() * (int1 - int2));
  }
  resultFromTask7 = int1 + Math.round(Math.random() * (int2 - int1));
  return resultFromTask7;
}

// Задание 8
// Вывести в консоль текущую дату.

console.log(new Date());

// Задание 9
// Создать переменную  currentDate , хранящую текущую дату. Вывести дату, которая наступит через 73 дня после текущей.

let currentDate = new Date();
const searchedDate = currentDate.setDate(currentDate.getDate() + 73);
console.log(new Date(searchedDate));

// Задание 10
// Написать функцию, которая принимает дату и возвращает ее в формате:
// Дата: [число] [месяц на русском] [год] — это [день недели на русском].
// Время: [часы]:[минуты]:[секунды]
let months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
let days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
let thisDate = new Date();

function transformDate(date) {
  let resultFromTask10 = `Дата:  ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()} года — это ${
    days[date.getDay()]
  }.${"\r\n"}Время: ${date.toTimeString()}`;
  return resultFromTask10;
}
console.log(transformDate(thisDate));
