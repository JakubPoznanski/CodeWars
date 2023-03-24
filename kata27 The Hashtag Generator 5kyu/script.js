//https://www.codewars.com/kata/52449b062fb80683ec000024/solutions/javascript
function generateHashtag(str) {
  console.log(`this is string (${str})`);
  const arr = str
    .split(" ")
    .filter((x) => x !== "")
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1));
  if (arr.length === 0) {
    return false;
  }
  arr.unshift("#");
  return arr.join("").length <= 140 ? arr.join("") : false;
}
