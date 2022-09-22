function diagonalAttack(input) {
    let diagonalRight = 0;
    let diagonalLeft = 0;

    for (let i = 0; i < input.length; i++) {
        let row = input[i].split(" ");
        diagonalRight += Number(row[i]);
    }

    for (let i = input.length - 1; i >=0; i--) {
        let row = input[i].split(" ");
        diagonalLeft += Number(row[i]);
    }
   
   
    if (diagonalRight == diagonalRight) {
        let newMatrix = [];
       
        for (let i = 0; i < input.length; i++) {
            let row = input[i].split(" ");
            for (let u = 0; u < row.length; u++) {
                if (u != i && u != row.length - (i+1)) {
                    row[u] = diagonalRight;
                }
            }
            newMatrix.push(row.join(" "));
        }

        for (let i = 0; i < input.length; i++) {
            console.log(newMatrix[i]);
        }
        
    } else {
        console.log(input);
    }

}

diagonalAttack([
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
/*
5 15 15 15 1
15 4 15 2 15
15 15 3 15 15
15 4 15 2 15
5 15 15 15 1
*/
diagonalAttack([
'1 1 1',
'1 1 1',
'1 1 0']);
/*
1 1 1
1 1 1
1 1 0
*/

/*
Write a function that reads a given matrix of numbers, and checks if both main diagonals have an equal sum. 
If they have, set every element that is NOT part of the main diagonals to that sum, alternatively just print the matrix unchanged.
Input
The input comes as an array of strings. Each element represents a string of numbers, with spaces between them. 
Parse it into a matrix of numbers, so you can work with it.
Output
The output is either the new matrix, with all cells not belonging to a main diagonal changed to the diagonal sum, 
or the original matrix if the two diagonals have different sums. You need to print every row on a new line, with cells separated by a space. Check the examples below. 
*/