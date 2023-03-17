//https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n) {
  const numb = Number([...n.toString()].sort().reverse().join(""));
  return numb;
}
console.log(descendingOrder(31413231));
