function spiralMatrix(row, column) {
    let spiral = [];
    
    for (let i = 0; i < row; i++) {
        spiral.push([]);
    }

    let startRow = 0;
    let endRow = row - 1;
    let startColumn = 0;
    let endColumn = column - 1;

    let direction = "right";

    let counter = 1;

    while (startRow <= endRow && startColumn <= endColumn) {
        
        switch (direction) {

            case "right":
                for (let i = startColumn; i <= endColumn; i++) {
                    spiral[startRow][i] = counter;
                    counter++;
                }
                startRow++;
                direction = "down";
                break;

            case "down":
                for (let i = startRow; i <= endRow; i++) {
                    spiral[i][endColumn] = counter;
                    counter++;
                }
                endColumn--;
                direction = "left";
                break;

            case "left":
                for (let i = endColumn; i >= startColumn; i--) {
                    spiral[endRow][i] = counter;
                    counter++;
                }
                endRow--;
                direction = "up";
                break;
        
            case "up":
                for (let i = endRow; i >= startRow; i--) {
                    spiral[i][startColumn] = counter;
                    counter++;
                }
                startColumn++;
                direction = "right";
                break;
        }
    }

    for (let i = 0; i < row; i++) {
        console.log(spiral[i].join(" "));
    }

}

spiralMatrix(5, 5);
/*
1  2  3  4  5
16 17 18 19 6
15 24 25 20 7
14 23 22 21 8
13 12 11 10 9
*/
spiralMatrix(3, 3);
/*
1 2 3
8 9 4
7 6 5
*/