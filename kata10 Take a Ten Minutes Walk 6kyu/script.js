//www.codewars.com/kata/54da539698b8a2ad76000228
https: function isValidWalk(walk) {
  let x = 0;
  let y = 0;
  for (let direction of walk) {
    if (direction === "n") {
      y++;
    } else if (direction === "e") {
      x++;
    } else if (direction === "s") {
      y--;
    } else if (direction === "w") {
      x--;
    }
  }
  if (x === 0 && y === 0 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}
