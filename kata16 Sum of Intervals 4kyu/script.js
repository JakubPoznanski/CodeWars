// https://www.codewars.com/kata/52b7ed099cdc285c300001cd
function sumIntervals(intervals) {
  const intervalsCopy = [...intervals]
    .sort((a, b) => (a[0] < b[0] ? -1 : 1))
    .sort(function (a, b) {
      if (a[0] === b[0]) return a[1] < b[1] ? -1 : 1;
    });
  let toSubb = 0;
  //function to calc long of interval
  const long = function (interval) {
    return interval[1] - interval[0];
  };
  //Calc number toSubb
  for (let i = 0; i < intervalsCopy.length; i++) {
    for (let j = i; j < intervalsCopy.length; j++) {
      const second = intervalsCopy[j];
      const first = intervalsCopy[i];
      if (first[1] >= second[0] && first[0] <= second[0] && first !== second) {
        if (first[1] >= second[1]) {
          toSubb += long(second);
          intervalsCopy[i + 1] = intervalsCopy[i];
        } else {
          toSubb += Math.abs(
            long([first[0], second[1]]) - long(second) - long(first)
          );
        }
        break;
      }
    }
  }
  //calc sum of input intervals
  let acc = intervals
    .map((cur) => cur[1] - cur[0])
    .reduce((acc, cur) => acc + cur);
  return acc - toSubb;
}
