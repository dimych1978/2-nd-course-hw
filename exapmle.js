// let number = +prompt('Number?')
const number = () => {
  return +prompt("Number?");
};
function someThing(example) {
  example % 2 === 0 ? alert("Четное") : alert("нечетное");
}
someThing(number());
