//https://www.codewars.com/kata/51b62bf6a9c58071c600001b
function solution(number) {
  const dataArr = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  const FinalArr = [];
  let value = number;
  while (value !== 0) {
    console.log(value);
    for (let i = 0; i < dataArr.length; i++) {
      if (dataArr[i][0] <= value) {
        value = value - dataArr[i][0];
        FinalArr.push(dataArr[i][1]);
        break;
      }
    }
  }

  return FinalArr.join("");
}
