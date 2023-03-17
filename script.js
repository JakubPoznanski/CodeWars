//https://www.codewars.com/kata/530e15517bc88ac656000716
function rot13(message) {
  console.log(message);
  const alfabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const checkCase = (letter, newLetter) =>
    letter === letter.toUpperCase() ? newLetter.toUpperCase() : newLetter;
  const finalArr = [...message].map(function (x) {
    const index = alfabet.indexOf(x.toLowerCase()) + 13;
    if (alfabet.includes(x.toLowerCase()))
      return alfabet[index]
        ? checkCase(x, alfabet[index])
        : checkCase(x, alfabet[index - alfabet.length]);
    return x;
  });
  return finalArr.join("");
}
