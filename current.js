function arrayDiff(a, b) {
  return a.filter((x) => !b.includes(x));
}
arrayDiff([1, 2], [1]);
