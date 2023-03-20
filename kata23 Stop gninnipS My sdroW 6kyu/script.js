//https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript
function spinWords(string) {
  const arr = string.split(" ").map(function (str) {
    if (str.length >= 5) {
      return str.split("").reverse().join("");
    } else {
      return str;
    }
  });
  return arr.join(" ");
}
