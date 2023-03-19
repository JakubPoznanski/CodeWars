//https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript
function pigIt(str) {
  return str
    .split(" ")
    .map((x) => (x.match(/[a-zA-Z]/) ? x.slice(1) + x.charAt(0) + "ay" : x))
    .join(" ");
}
