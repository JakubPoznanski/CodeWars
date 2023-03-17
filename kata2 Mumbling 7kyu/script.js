// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  s = s.toLowerCase();
  let total = s.charAt(0).toUpperCase();

  for (let i = 1; i < s.length; i++) {
    total = total + `-${s.charAt(i).toUpperCase()}${s.charAt(i).repeat(i)}`;
  }
  return total;
}
