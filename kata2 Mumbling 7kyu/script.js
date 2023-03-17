function accum(s) {
  s = s.toLowerCase();
  let total = s.charAt(0).toUpperCase();

  for (let i = 1; i < s.length; i++) {
    total = total + `-${s.charAt(i).toUpperCase()}${s.charAt(i).repeat(i)}`;
  }
  return total;
}
