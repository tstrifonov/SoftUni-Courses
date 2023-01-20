function spiralMatrix(rows, collumns) {
  const matrix = [];
  for (let row = 0; row < rows; row++) {
    matrix.push([]);
    for (let collumn = 0; collumn < collumns; collumn++) {
      matrix[row].push(0);
    }
  }

  let num = 1;
  let flag = true;

  let top = 0;
  let right = rows - 1;
  let bottom = collumns - 1;
  let left = 0;

  while (flag) {
    //left to right
    for (let collumn = top; collumn <= right; collumn++) {
      matrix[top][collumn] = num;
      num++;
    }
    top++;

    //top to bottow
    for (let row = top; row <= bottom; row++) {
      matrix[row][right] = num;
      num++;
    }
    right--;

    //right to left
    for (let collumn = right; collumn >= left; collumn--) {
      matrix[bottom][collumn] = num;
      num++;
    }
    bottom--;

    //top to bottow
    for (let row = bottom; row >= top; row--) {
      matrix[row][left] = num;
      num++;
    }
    left++;

    flag = false;
    for (let x = 0; x < rows; x++) {
      if (matrix[x].includes(0)) {
        flag = true;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    console.log(matrix[row].join(" "));
  }
}

spiralMatrix(5, 5);
// 1 2 3 4 5
// 16 17 18 19 6
// 15 24 25 20 7
// 14 23 22 21 8
// 13 12 11 10 9

spiralMatrix(3, 3);
// 1 2 3
// 8 9 4
// 7 6 5
