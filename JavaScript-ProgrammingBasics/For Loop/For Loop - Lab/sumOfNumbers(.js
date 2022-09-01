function sumOfNumbers(input) {
    let numberString = String(input[0]);
    let sum = 0;
    
    for (let i = 0; i < numberString.length; i++) {
        let n = Number(numberString[i]);
        sum += n;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["55"]);