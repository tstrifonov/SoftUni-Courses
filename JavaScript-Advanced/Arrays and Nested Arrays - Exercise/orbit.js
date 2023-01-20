function orbit(input) {
  const [width, height, x, y] = input;
  let grid = [];

  for (let i = 0; i < width; i++) {
    grid.push([]);
  }

  for (let row = 0; row < width; row++) {
    for (let collumn = 0; collumn < height; collumn++) {
      grid[row][collumn] =
        Math.max(Math.abs(row - x), Math.abs(collumn - y)) + 1;
    }
  }

  for (let row of grid) {
    console.log(row.join(" "));
  }
}

orbit([4, 4, 0, 0]);
// 1 2 3 4
// 2 2 3 4
// 3 3 3 4
// 4 4 4 4

orbit([5, 5, 2, 2]);
// 3 3 3 3 3
// 3 2 2 2 3
// 3 2 1 2 3
// 3 2 2 2 3
// 3 3 3 3 3
