function airPolution(sofiaMap, weatherCommands) {
    let polutedAreasCounter = 0;
    let polutedAreas = [];

    for (let i = 0; i < sofiaMap.length; i++) {
        sofiaMap[i] = sofiaMap[i].split(" ");
    }

    for (let i = 0; i < weatherCommands.length; i++) {
        let command = weatherCommands[i].split(" ")[0];
        let index = Number(weatherCommands[i].split(" ")[1]);

        switch (command) {
            case "breeze": breeze(sofiaMap, index); break;
            case "gale": gale(sofiaMap, index); break;
            case "smog": smog(sofiaMap, index); break;
        }
    }

    for (let i = 0; i < 5; i++) {
        for (let u = 0; u < 5; u++) {
            if (Number(sofiaMap[i][u]) >= 50) {
                polutedAreasCounter++;
                polutedAreas.push(`[${i}-${u}]`);
            }
        }
    }

    if (polutedAreasCounter == 0) {
        console.log(`No polluted areas`)
    } else {
        console.log(`Polluted areas: ${polutedAreas.join(", ")}`);
    }

    function breeze(matrix, index) {
        for (let i = 0; i < matrix[index].length; i++) {
            matrix[index][i] = Number(matrix[index][i])  - 15;
            if (matrix[index][i] < 0) {
                matrix[index][i] = 0;
            }
        }
    }

    function gale(matrix, index) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][index] = Number(matrix[i][index])  - 20;
            if (matrix[i][index] < 0) {
                matrix[i][index] = 0;
            }
        }
    }

    function smog(matrix, index) {
        for (let i = 0; i < matrix.length; i++) {
            for (let u = 0; u < matrix[i].length; u++) {
            matrix[i][u] = Number(matrix[i][u]) + index;
            }
        }
    }
}

/*
⦁	"breeze {index}" – index is the row where all column’s value drops by 15 PM
⦁	"gale {index}" – index is the column in all rows where value drops by 20 PM
⦁	"smog {value}" – all blocks in the map increase equally by the given value’s PM
The threshold in each block is 50 PM. If it is below that number, the block’s air is considered normal but if it reaches or goes over it, 
that block’s air is considered polluted. Also, note that the polluted particles in a block cannot go below zero.
Finally, your program needs to find if there are any polluted blocks and print them in the format given below.
*/

airPolution(
['5 7 72 14 4',
'41 35 37 27 33',
'23 16 27 42 12',
'2 20 28 39 14',
'16 34 31 10 24'],
['breeze 1', 'gale 2', 'smog 25']);
//Polluted areas: [0-2], [1-0], [2-3], [3-3], [4-1]

airPolution(
['5 7 3 28 32',
'41 12 49 30 33',
'3 16 20 42 12',
'2 20 10 39 14',
'7 34 4 27 24'],
['smog 11', 'gale 3', 'breeze 1', 'smog 2']);
//No polluted areas

airPolution(
['5 7 2 14 4',
'21 14 2 5 3',
'3 16 7 42 12',
'2 20 8 39 14',
'7 34 1 10 24'],
['breeze 1', 'gale 2', 'smog 35']);
//Polluted areas: [2-1], [2-3], [3-1], [3-3], [4-1], [4-4]