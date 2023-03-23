function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// function pickPeaks(arr) {
//   console.log(arr);
//   console.log("stop");
//   const obj = { pos: [], peaks: [] };
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < arr[i + 1] && arr[i + 1] >= arr[i + 2]) {
//       if (arr[i + 2] === arr[i + 1]) {
//         continue;
//       }
//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[j] < arr[i + 1]) {
//           obj.pos.push(i + 1);
//           obj.peaks.push(arr[i + 1]);
//           break;
//         }
//       }
//     }
//   }
//   console.log(obj);
//   return obj;
// }
// pickPeaks([
//   1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
// ]);
