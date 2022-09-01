function maxNumbers(input) {
    let index = 0;
    let command = input[index];
    let biggerNumber = input[index];
    let currentNumber = 0;
    
    while (command !== "Stop") {
        currentNumber = Number(command);

        if (currentNumber >= biggerNumber) {
            biggerNumber = currentNumber;
        }

        index++;
        command = input[index];
    }

    console.log(biggerNumber);
}

maxNumbers(["100", "99", "80", "70", "Stop"]);