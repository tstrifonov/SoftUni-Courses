function bunnyKill(matrix) {
    let coordinates = matrix.pop().split(" ");
    let damage = 0;
    let killCount = 0;

    //превръщам стринговете в array
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = matrix[i].split(" ");
    }

    for (let i = 0; i < coordinates.length; i++) {
        let row = Number(coordinates[i].split(",")[0]);
        let column = Number(coordinates[i].split(",")[1]);
        let explosionDMG = Number(matrix[row][column]);
        if (matrix[row][column] > 0) {
        matrix[row][column] = 0;
        damage += explosionDMG;
        killCount++;
        
        boom(matrix, row + 1, column + 1, explosionDMG);
        boom(matrix, row + 1, column, explosionDMG);
        boom(matrix, row + 1, column - 1, explosionDMG);
        boom(matrix, row, column + 1, explosionDMG);
        boom(matrix, row, column - 1, explosionDMG);
        boom(matrix, row - 1, column + 1, explosionDMG);
        boom(matrix, row - 1, column, explosionDMG);
        boom(matrix, row - 1, column - 1, explosionDMG);
        }
    }

/*
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
*/

    for (let i = 0; i < matrix.length; i++) {
        for (let u = 0; u < matrix[i].length; u++) {
            if (Number(matrix[i][u]) > 0) {
                damage += Number(matrix[i][u]);
                killCount++;
            }
        }
    }

    console.log(damage);
    console.log(killCount);

    function boom(matrix, row, column, explosionDMG) {
        if (row >= 0 && row < matrix.length && column >= 0 && column < matrix[row].length) {
            matrix[row][column] = Number(matrix[row][column]) - explosionDMG;
        }
   }

}

bunnyKill(
    ['10 10 10',
    '10 10 10', 
    '10 10 10',
    '0,0']); //60 6
    
    console.log("----------------");
    
    bunnyKill(
    ['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 0,1']); //70 7