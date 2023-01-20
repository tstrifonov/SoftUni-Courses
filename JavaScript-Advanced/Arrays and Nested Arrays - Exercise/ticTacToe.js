function ticTacToe(input) {
  //създавам началния морски шах
  let chessBoard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  //цялата идея на този playerChooser е когато някой user иска да попълне вече попълнено поле да го накарам да попълни отново
  let playerChooser = 0;

  for (let i = 0; i < input.length; i++) {
    let row = Number(input[i].split(" ")[0]);
    let collumn = Number(input[i].split(" ")[1]);
    let sign;

    if ((playerChooser + i) % 2 == 0) {
      sign = "X";
    } else {
      sign = "O";
    }

    // If  a player tries to make his turn on already taken place, he should take his turn again and you should print the following message:
    // "This place is already taken. Please choose another!"

    if (chessBoard[row][collumn] == false) {
      chessBoard[row][collumn] = sign;
    } else {
      console.log("This place is already taken. Please choose another!");
      playerChooser++;
      continue;
    }

    // If someone wins you should print the following message and  the current state of the dashboard:
    // "Player {x} wins!"
    let doWeHaveWinner = false;
    for (let x = 0; x < 3; x++) {
      if (
        chessBoard[x][0] != false &&
        chessBoard[x][0] == chessBoard[x][1] &&
        chessBoard[x][0] == chessBoard[x][2]
      ) {
        doWeHaveWinner = true;
      } else if (
        chessBoard[0][x] != false &&
        chessBoard[0][x] == chessBoard[1][x] &&
        chessBoard[0][x] == chessBoard[2][x]
      ) {
        doWeHaveWinner = true;
      } else if (
        chessBoard[0][0] != false &&
        chessBoard[0][0] == chessBoard[1][1] &&
        chessBoard[0][0] == chessBoard[2][2]
      ) {
        doWeHaveWinner = true;
      } else if (
        chessBoard[0][2] != false &&
        chessBoard[0][2] == chessBoard[1][1] &&
        chessBoard[0][2] == chessBoard[2][0]
      ) {
        doWeHaveWinner = true;
      }
    }

    if (doWeHaveWinner) {
      console.log(`Player ${sign} wins!`);
      break;
    }

    // If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
    // "The game ended! Nobody wins :("
    let endsOrNot = true;
    for (let row of chessBoard) {
      if (row.includes(false)) {
        endsOrNot = false;
      }
    }
    if (endsOrNot) {
      console.log("The game ended! Nobody wins :(");
      break;
    }
  }

  //логвам крайния морски шах на конзолата
  for (let i = 0; i < chessBoard.length; i++) {
    console.log(chessBoard[i].join("\t"));
  }
}

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
// Player O wins!
// O	X	X
// X	O	X
// O	false	O

console.log("----------------------");

ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
// This place is already taken. Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false

console.log("----------------------");

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
// The game ended! Nobody wins :(
//     O	X	X
//     X	X	O
//     O	O	X

//ЦЯЛАТА ЗАДАЧА:

// Output
// There are two players - X and O
// If  a player tries to make his turn on already taken place, he should take his turn again and you should print the following message:
// "This place is already taken. Please choose another!"
// If there are no free spaces on the dashboard and nobody wins the game should end and you should print the following message:
// "The game ended! Nobody wins :("
// If someone wins you should print the following message and  the current state of the dashboard:
// "Player {x} wins!"
// Note: When printing the state of the dashboard the elements of each row of the dashboard should be separated by "\t" and each row should be on a new line.

// Constraints
// The elements in the input array will always be enough to end the game.
