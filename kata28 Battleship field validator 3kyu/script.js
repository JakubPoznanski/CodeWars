//https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7
function validateBattlefield(field) {
  const ocean = [
    Array(field.length).fill(0),
    ...field,
    Array(field.length).fill(0),
  ];
  ocean.forEach((arr) => {
    arr.push(0);
    arr.unshift(0);
  });
  const battleship = {
    size: 4,
    amount: 1,
    cords: [],
  };
  const cruiser = {
    size: 3,
    amount: 2,
    cords: [],
  };
  const destroyer = {
    size: 2,
    amount: 3,
    cords: [],
  };
  const submarine = {
    size: 1,
    amount: 4,
    cords: [],
  };

  const check = function (row, column) {
    let long = 1;
    let position = "dot";
    let leftCounter = column - 1;
    let rightCounter = column + 1;
    let upCounter = row - 1;
    let downCounter = row + 1;
    const currentCords = [[row, column]];
    const checkLeftRight = function () {
      while (
        long <= 3 &&
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
        if (
          ocean[row][leftCounter] === 1 &&
          ocean[row][leftCounter + 1] === 1
        ) {
          currentCords.push([row, leftCounter]);
          long++;
        }
        leftCounter--;
        rightCounter++;
      }
      long > 1 ? (position = "horizontal") : (position = "dot");
    };
    const checkUpDown = function () {
      while (long <= 3 && upCounter >= row - 3 && downCounter <= row + 3) {
        if (
          ocean[upCounter]?.[column] === 1 &&
          ocean[upCounter + 1][column] === 1
        ) {
          currentCords.push([upCounter, column]);
          long++;
        }
        if (
          ocean[downCounter]?.[column] === 1 &&
          ocean[downCounter - 1][column] === 1
        ) {
          currentCords.push([downCounter, column]);
          long++;
        }
        upCounter--;
        downCounter++;
      }
      long > 1 ? (position = "vertical") : (position = "dot");
    };
    const CheckAround = function () {
      let returnFlag = true;
      if (position === "horizontal") {
        const onlyColumns = currentCords.map(([row, column]) => column);
        const max = Math.max.apply(null, onlyColumns) + 1;
        const min = Math.min.apply(null, onlyColumns) - 1;
        currentCords.forEach(([row, column]) => {
          if (
            ocean[row + 1][column] === 1 ||
            ocean[row + 1][max] === 1 ||
            ocean[row + 1][min] === 1 ||
            ocean[row - 1][column] === 1 ||
            ocean[row - 1][max] === 1 ||
            ocean[row - 1][min] === 1 ||
            ocean[row][max] === 1 ||
            ocean[row][min] === 1
          ) {
            console.log("statek obok statku");
            returnFlag = false;
          }
        });
      }
      if (position === "vertical") {
        const onlyRows = currentCords.map(([row, column]) => row);
        const max = Math.max.apply(null, onlyRows) + 1;
        const min = Math.min.apply(null, onlyRows) - 1;
        currentCords.forEach(([row, column]) => {
          if (
            ocean[row][column - 1] === 1 ||
            ocean[row][column + 1] === 1 ||
            ocean[min][column] === 1 ||
            ocean[min][column + 1] === 1 ||
            ocean[min][column - 1] === 1 ||
            ocean[max][column] === 1 ||
            ocean[max][column - 1] === 1 ||
            ocean[max][column + 1] === 1
          ) {
            console.log("statek obok statku vertical");
            returnFlag = false;
          }
        });
      }
      if (position === "dot") {
        if (
          ocean[row][column + 1] === 1 ||
          ocean[row][column - 1] === 1 ||
          ocean[row + 1][column] === 1 ||
          ocean[row + 1][column - 1] === 1 ||
          ocean[row + 1][column + 1] === 1 ||
          ocean[row - 1][column] === 1 ||
          ocean[row - 1][column + 1] === 1 ||
          ocean[row - 1][column - 1] === 1
        ) {
        }
      }
      if (returnFlag) return true;
      return false;
    };
    checkLeftRight();
    if (long === 1) checkUpDown();
    if (CheckAround()) {
      currentCords.forEach(([row, column]) => (ocean[row][column] = 0));
      switch (long) {
        case battleship.size:
          battleship.cords.push(currentCords);
          battleship.amount--;
          break;
        case cruiser.size:
          cruiser.cords.push(currentCords);
          cruiser.amount--;
          break;
        case destroyer.size:
          destroyer.cords.push(currentCords);
          destroyer.amount--;
          break;
        case submarine.size:
          submarine.cords.push(currentCords);
          submarine.amount--;
          break;
        default:
          break;
      }
    }
  };
  for (let row = 1; row < ocean.length - 1; row++) {
    for (let column = 1; column < ocean[1].length - 1; column++) {
      if (ocean[row][column] === 1) {
        check(row, column);
      }
    }
  }
  if (
    battleship.amount === 0 &&
    cruiser.amount === 0 &&
    destroyer.amount === 0 &&
    submarine.amount === 0
  ) {
    return true;
  }
  return false;
}
