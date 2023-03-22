//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
var maxSequence = function (arr) {
  const positive = arr.filter((x) => x > 0).length;
  if (arr.length === 0 || positive === 0) {
    return 0;
  }
  const sum = function (arr, i, j) {
    return arr.slice(i, j).reduce((acc, cur) => acc + cur, 0);
  };
  let acc = arr[0];
  let currentAcc;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      currentAcc = sum(arr, i, j);
      if (acc < currentAcc) {
        acc = currentAcc;
      }
    }
  }
  return acc;
};
