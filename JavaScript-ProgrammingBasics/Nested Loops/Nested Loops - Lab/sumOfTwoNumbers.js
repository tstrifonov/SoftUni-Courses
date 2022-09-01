function sumOfTwoNumbers(input) {
    let startOfInterval = Number(input[0]);
    let endOfInterval = Number(input[1]);
    let magicNumber = Number(input[2]);

    let combinationsCounter = 0;
    let foundOrNot = false;

    for (let a = startOfInterval; a <= endOfInterval; a++) {
        
        for (let b = startOfInterval; b <= endOfInterval; b++) {
            
            combinationsCounter++;
            
            if (a + b == magicNumber) {
                foundOrNot = true;
                console.log(`Combination N:${combinationsCounter} (${a} + ${b} = ${magicNumber})`);
                break;
            }
        } 

        if (foundOrNot === true) {
            break;
        }

    }
    
        if (foundOrNot === false) {
            console.log(`${combinationsCounter} combinations - neither equals ${magicNumber}`);

        }

}

sumOfTwoNumbers(["1", "10", "5"]);