function uniquePinCodes(input) {
    let endRangeA = Number(input[0]);
    let endRangeB = Number(input[1]);
    let endRangeC = Number(input[2]);
    
    if (endRangeB > 7) {
        endRangeB = 7;
    }

    for (let a = 2; a <= endRangeA; a = a + 2) {
        for (let b = 2; b <= endRangeB; b++) {
            if (b === 4 || b === 6) {
                b++;
            }
            for (let c = 2; c <= endRangeC; c = c + 2) {
                console.log(`${a} ${b} ${c}`);
            }
        }

    }

}

uniquePinCodes(["2", "9", "2"]);