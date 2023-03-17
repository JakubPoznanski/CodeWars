//https://www.codewars.com/kata/514b92a657cdc65150000006
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
// Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  let set = new Set([]);
  for (let i = 3; i < number; i += 3) {
    set.add(i);
  }
  for (let i = 5; i < number; i += 5) {
    set.add(i);
  }
  let acu = 0;
  for (let item of set) {
    acu += item;
  }
  if (number >= 0) {
    return acu;
  } else {
    return 0;
  }
}
