function validateBattlefield(field) {
  const ocean = [
    ["v", "v", "v", "v", "v", "v", "v", "v", "v", "v"],
    ...field,
    ["v", "v", "v", "v", "v", "v", "v", "v", "v", "v"],
  ];
  ocean.forEach((arr) => {
    arr.push("v");
    arr.unshift("v");
  });
  const width = field[1].length;
  console.log(ocean);

  const battleship = {
    size: 4,
    amount: 1,
    rows: [],
    column: [],
  };
  const cruiser = {
    size: 3,
    amount: 2,
    rows: [],
    column: [],
  };
  const destroyer = {
    size: 2,
    amount: 3,
    rows: [],
    column: [],
  };
  const submarine = {
    size: 1,
    amount: 4,
    rows: [],
    column: [],
  };

  const checkLeftRight = function (row, column) {
    const currentCords = [[row, column]];
    //row is constant
    let long = 1;
    let position = "horizontal";
    let rightCounter = column + 1;
    let leftCounter = column - 1;
    let upCounter = row + 1;
    let downCounter = row - 1;
    while (
      long <= 4 &&
      rightCounter <= column + 3 &&
      leftCounter >= column - 3
    ) {
      if (
        ocean[row][rightCounter] === 1 &&
        ocean[row][rightCounter - 1] === 1
      ) {
        currentCords.push([row, rightCounter]);
        long++;
      }
      if (ocean[row][leftCounter] === 1 && ocean[row][leftCounter + 1] === 1) {
        currentCords.push([row, leftCounter]);
        long++;
      }
      leftCounter--;
      rightCounter++;
    }
    if (long === 1) {
      while (long <= 4 && upCounter <= column + 3 && downCounter >= column - 3)
        console.log("updown iteration");
      {
        if (
          ocean[upCounter][column] === 1 &&
          ocean[upCounter - 1][column] === 1
        ) {
          currentCords.push([upCounter, column]);
          long++;
        }
        if (
          ocean[downCounter][column] === 1 &&
          ocean[downCounter + 1][column] === 1
        ) {
          currentCords.push([downCounter, column]);
          long++;
        }
        downCounter--;
        upCounter++;
      }
    }
    //CheckAround

    console.log(currentCords);
    console.log("long", long);
  };
  checkLeftRight(3, 7);
}
// const checkDownUp = function (i, j) {};
// for (let row = 0; row < field.length; row++) {
//   for (let column; column < width; column++) {
//     if (ocean[row][column] === 1) {
//       //check around
//     }
//   }
// }

validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
