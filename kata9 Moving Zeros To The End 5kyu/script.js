//https://www.codewars.com/kata/52597aa56021e91c93000cb0
function moveZeros(arr) {
  const half1 = arr.filter((value) => value !== 0);
  const half2 = arr.filter((value) => value === 0);
  const final = [...half1, ...half2];
  return final;
}
