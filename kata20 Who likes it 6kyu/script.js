//https://www.codewars.com/kata/5266876b8f4bf2da9b000362/solutions/javascript
function likes(names) {
  const name0 = names[0];
  const name1 = names[1];
  const name2 = names[2];
  switch (names.length) {
    case 0:
      return "no one likes this";
    case 1:
      return `${name0} likes this`;
    case 2:
      return `${name0} and ${name1} like this`;
    case 3:
      return `${name0}, ${name1} and ${name2} like this`;
    default:
      return `${name0}, ${name1} and ${names.length - 2} others like this`;
  }
}
