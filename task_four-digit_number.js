// Какое четырехзначное число надо умножить на 4, чтобы получилось равное его "перевернутому" состоянию.

let variable;
let variableReverse;
const result = () => {
  for (a = 1; a <= 9; a++) {
    for (b = 0; b <= 9; b++) {
      for (c = 0; c <= 9; c++) {
        for (d = 0; d <= 9; d++) {
          variable = +[a, b, c, d].join("");
          variableReverse = +[d, c, b, a].join("");
          if (variable * 4 === variableReverse) {
            return variable;
          }
        }
      }
    }
  }
};
result();
console.log(variable);
