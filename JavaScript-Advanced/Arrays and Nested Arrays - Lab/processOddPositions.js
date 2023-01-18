function processOddPositions(arr) {
  return arr
    .filter((element, index) => index % 2 != 0)
    .map((element) => (element *= 2))
    .reverse()
    .join(" ");
}

console.log(processOddPositions([10, 15, 20, 25]));
/*
50 30
*/

console.log(processOddPositions([3, 0, 10, 4, 7, 3]));
/*
6 8 0
*/
