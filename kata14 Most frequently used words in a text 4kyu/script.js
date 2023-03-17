//www.codewars.com/kata/51e056fe544cf36c410000fb
https: function topThreeWords(text) {
  const finalArr = [];
  //create clear Arr with words

  const wordsArr = text
    .toLowerCase()
    .replace(/[^(a-zA-Z')]/g, " ")
    .split(" ")
    .filter((str) => str !== "" && str !== "'");

  //create object for counts
  const wordsCountObj = {};
  //count every word and save in object
  wordsArr.forEach((el) => {
    wordsCountObj[el] = (wordsCountObj[el] || 0) + 1;
  });
  //create arr of values in descending order
  const values = Object.values(wordsCountObj).sort().reverse();
  const j = values.length >= 3 ? 3 : values.length;
  for (let i = 0; i < j; i++) {
    finalArr[i] = Object.keys(wordsCountObj).find(function (key) {
      if (wordsCountObj[key] === values[i]) {
        delete wordsCountObj[key];
        return true;
      }
    });
  }

  return finalArr;
}
