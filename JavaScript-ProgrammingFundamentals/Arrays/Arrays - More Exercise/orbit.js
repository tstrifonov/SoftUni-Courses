function orbit(input) {
    let width = Number(input[0]);
    let height = Number(input[1]);
    let x = Number(input[2]);
    let y = Number(input[3]);

    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }
    
    for (let i = 0; i < height; i++) {
        for (let u = 0; u < width; u++) {
            matrix[i][u] = Math.max(Math.abs(i - x), Math.abs(u - y)) + 1;
        }
    }
   
    for (let i = 0; i < height; i++) {
        console.log(matrix[i].join(" "));
    }

}

orbit([4, 4, 0, 0]);
/*
1 2 3 4
2 2 3 4
3 3 3 4
4 4 4 4
*/
orbit([5, 5, 2, 2]);
/*
3 3 3 3 3
3 2 2 2 3
3 2 1 2 3
3 2 2 2 3
3 3 3 3 3 
*/

/*
You will be given an empty rectangular space of cells. Then you will be given the position of a star. You need to build the orbits around it.
You will be given a coordinate of a cell, which will always be inside the matrix, on which you will put the value - 1. 
Then you must set the values of the cells directly surrounding that cell, including the diagonals, to 2. 
After which you must set the values of the next surrounding cells to 3 and so on. Check the pictures for more info.

Input
The input comes as an array of 4 numbers [width, height, x, y], which represents the dimensions of the matrix and the coordinates of the star.
Output
The output is the filled matrix, with the cells separated by a space, each row on a new line.
*/