function equalNeighbors(matrix) {
    let equalNeighborPairs = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let u = 0; u < matrix[0].length; u++) {
            let a = matrix[i][u];
            
            if (u + 1 < matrix[0].length) {
                let b = matrix[i][u + 1];
                if (a == b) {
                    equalNeighborPairs++;
                }
            }
            
            if (i + 1 < matrix.length) {
                let c = matrix[i + 1][u];
                if (a == c) {
                    equalNeighborPairs++;
                }
            }
        }
    }

    return equalNeighborPairs;
}

console.log(equalNeighbors([
 ['2', '3', '4', '7', '0'],
 ['4', '0', '5', '3', '4'],
 ['2', '3', '5', '4', '2'],
 ['9', '8', '7', '5', '4']])); //1