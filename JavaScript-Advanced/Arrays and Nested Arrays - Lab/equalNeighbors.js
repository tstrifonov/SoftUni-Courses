function equalNeighbors(nestedArr) {
  let equalPairs = 0;

  for (let row = 0; row < nestedArr.length - 1; row++) {
    for (let collumn = 0; collumn < nestedArr[row].length; collumn++) {
      let cellA = nestedArr[row][collumn];
      let cellB = nestedArr[row + 1][collumn];
      if (cellA == cellB) {
        equalPairs++;
      }
    }
  }

  for (let row = 0; row < nestedArr.length; row++) {
    for (let collumn = 0; collumn < nestedArr[row].length; collumn++) {
      let cellA = nestedArr[row][collumn];
      let cellB = nestedArr[row][collumn + 1];
      if (cellA == cellB) {
        equalPairs++;
      }
    }
  }

  return equalPairs;
}

console.log(
  equalNeighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2],
  ])
);
//5

/*
console.log(
  equalNeighbors([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);
//1
*/
