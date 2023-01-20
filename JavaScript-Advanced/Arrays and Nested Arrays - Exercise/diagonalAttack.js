function diagonalAttack(input) {
  //превърни инпута в истинска матрица
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ");
  }

  //да намеря сумата на диагоналите
  let diagonalOne = 0;
  let diagonalTwo = 0;
  for (let i = 0; i < input.length; i++) {
    diagonalOne += Number(input[i][i]);
    diagonalTwo += Number(input[i][input.length - 1 - i]);
  }

  //да проверя дали са равни  и да направя нужните корекции
  if (diagonalOne == diagonalTwo) {
    for (let x = 0; x < input.length; x++) {
      for (let z = 0; z < input.length; z++) {
        if (x == z) {
          input[x][z] = input[x][z];
        } else if (z == input.length - 1 - x) {
          input[x][z] = input[x][z];
        } else {
          input[x][z] = diagonalOne;
        }
      }
    }
  }
  for (let row of input) {
    console.log(row.join(" "));
  }
}

diagonalAttack([
  "5 3 12 3 1",
  "11 4 23 2 5",
  "101 12 3 21 10",
  "1 4 5 2 2",
  "5 22 33 11 1",
]);
// 5 15 15 15 1
// 15 4 15 2 15
// 15 15 3 15 15
// 15 4 15 2 15
// 5 15 15 15 1

diagonalAttack(["1 1 1", "1 1 1", "1 1 0"]);
// 1 1 1
// 1 1 1
// 1 1 0
