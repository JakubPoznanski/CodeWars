//https://www.codewars.com/kata/5526fc09a1bbd946250002dc
function findOutlier(integers) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i < integers.length; i++) {
    integers[i] % 2 === 0 ? even++ : odd++;
  }
  console.log(even);
  console.log(odd);
  for (const item of integers) {
    if (even < odd && item % 2 === 0) {
      return item;
    } else if (even > odd && item % 2 !== 0) {
      return item;
    }
  }
}
