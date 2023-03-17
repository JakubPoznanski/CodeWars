//https://www.codewars.com/kata/5629db57620258aa9d000014
function mix(s1, s2) {
  let onlyLetters1 = [...s1.replace(/[^a-z]+/gi, "")];
  let onlyLetters2 = [...s2.replace(/[^a-z]+/gi, "")];
  const keys = [...new Set([...onlyLetters1, ...onlyLetters2])].sort();
  let obj1 = {};
  let obj2 = {};
  onlyLetters1.forEach((x) => {
    if (x !== x.toUpperCase()) obj1[x] = (obj1[x] || 0) + 1;
  });
  onlyLetters2.forEach((x) => {
    if (x !== x.toUpperCase()) obj2[x] = (obj2[x] || 0) + 1;
  });
  let comparedArr = [];
  const checkUndefined = function (n, i) {
    return n[keys[i]] ? n[keys[i]] : 0;
  };
  for (let i = 0; i < keys.length; i++) {
    const number1 = checkUndefined(obj1, i);
    const number2 = checkUndefined(obj2, i);
    if (number1 > number2) {
      comparedArr.push(`1:${keys[i].repeat(obj1[keys[i]])}`);
    }
  }
  for (let i = 0; i < keys.length; i++) {
    const number1 = checkUndefined(obj1, i);
    const number2 = checkUndefined(obj2, i);
    if (number1 < number2) {
      comparedArr.push(`2:${keys[i].repeat(obj2[keys[i]])}`);
    }
  }
  for (let i = 0; i < keys.length; i++) {
    const number1 = checkUndefined(obj1, i);
    const number2 = checkUndefined(obj2, i);
    if (number1 === number2) {
      comparedArr.push(`=:${keys[i].repeat(obj1[keys[i]])}`);
    }
  }
  comparedArr.sort(function (a, b) {
    return b.length - a.length;
  });
  comparedArr = comparedArr.filter((value) => {
    return value.length > 3;
  });
  return comparedArr.join("/");
}
