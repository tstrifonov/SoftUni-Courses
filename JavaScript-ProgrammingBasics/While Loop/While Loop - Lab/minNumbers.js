function minNumbers(input) {
    let index = 0;
    let command = input[index];
    let smallerNumber = input[index];
    let currentNumber = 0;
    
    while (command !== "Stop") {
        currentNumber = Number(command);

        if (currentNumber <= smallerNumber) {
            smallerNumber = currentNumber;
        }

        index++;
        command = input[index];
    }

    console.log(smallerNumber);
}

minNumbers(["100", "99", "80", "70", "Stop"]);