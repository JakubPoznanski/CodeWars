//https://www.codewars.com/kata/5287e858c6b5a9678200083c
function narcissistic(value) {
  // Code me to return true or false
  let acu = 0;
  let arr = [...value.toString()];
  const x = arr.length;
  for (let item of arr) {
    acu = acu + Math.pow(item, x);
  }
  if (value === acu) {
    return true;
  } else {
    return false;
  }
}
