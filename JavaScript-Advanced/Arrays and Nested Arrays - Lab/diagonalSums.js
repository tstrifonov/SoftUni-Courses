function diagonalSums(nestedArr) {
  let diagonalOne = 0;
  let diagonalTwo = 0;

  for (let i = 0; i < nestedArr.length; i++) {
    diagonalOne += nestedArr[i][i];
    diagonalTwo += nestedArr[i][nestedArr.length - i - 1];
  }

  return diagonalOne + " " + diagonalTwo;
}

console.log(
  diagonalSums([
    [20, 40],
    [10, 60],
  ])
);
//80 50

console.log(
  diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89],
  ])
);
//99 25
