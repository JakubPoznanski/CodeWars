function validateBattlefield(field) {
  const ocean = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ...field,
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  ocean.forEach((arr) => {
    arr.push(0);
    arr.unshift(0);
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
    let rightCounter = column + 1;
    let leftCounter = column - 1;
    let upCounter = row - 1;
    let downCounter = row + 1;
    while (
      long <= 4 &&
      rightCounter >= column + 3 &&
      leftCounter <= column - 3
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
      while (long <= 4 && upCounter >= row - 3 && downCounter <= row + 3) {
        console.log("updown iteration");
        if (
          ocean[upCounter][column] === 1 &&
          ocean[upCounter + 1][column] === 1
        ) {
          currentCords.push([upCounter, column]);
          console.log("pushup");
          long++;
        }
        if (
          ocean[downCounter][column] === 1 &&
          ocean[downCounter - 1][column] === 1
        ) {
          console.log("pushdown");
          currentCords.push([downCounter, column]);
          long++;
        }
        upCounter--;
        downCounter++;
      }
    }
    console.log(currentCords);
    console.log("long", long);
  };
  checkLeftRight(8, 3);
}
validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]);
