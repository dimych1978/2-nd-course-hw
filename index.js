function calendar() {
  let numberMonth = +prompt("Ведите порядковый номер месяца");
  function work(month) {
    switch (true) {
      case typeof month !== "number":
        alert(
          "Это не число. Порядковый номер месяца может быть только числом в диапазоне от 1 до 12 включительно"
        );
        break;
      case month % 1 !== 0 || month <= 0:
        alert(
          "Порядковый номер месяца может быть только натуральным числом( иметь исключительно положительное целое значение)"
        );
        break;
      case (month >= 1 && month <= 2) || month === 12:
        alert("Это определенно Зима");
        break;
      case month >= 3 && month <= 5:
        alert("Это определенно Весна");
        break;
      case month >= 6 && month <= 8:
        alert("Это определенно Лето");
        break;
      case month >= 9 && month <= 11:
        alert("Это определенно Осень");
        break;
      default:
        alert("Вы ошиблись. Введите корректный номер месяца");
        break;
    }
  }
  work(numberMonth);
}

function words() {
  let arrWords = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  arrWords = arrWords.sort(() => Math.random() - 0.5);
  alert(arrWords);
  function answer() {
    let a = String(prompt("Какой фрукт стоял первым?"));
    let b = String(prompt("Какой фрукт был последним в списке?"));
    if (
      a.toLowerCase() === arrWords[0].toLowerCase() &&
      b.toLowerCase() === arrWords[6].toLowerCase()
    ) {
      alert("Браво, примите поздравления!");
    } else if (
      a.toLowerCase() === arrWords[0].toLowerCase() ||
      b.toLowerCase() === arrWords[6].toLowerCase()
    ) {
      alert("Вы были близки к победе!");
    } else {
      alert("Ответы на оба вопроса оказались неверными((");
    }
  }
  answer();
}
