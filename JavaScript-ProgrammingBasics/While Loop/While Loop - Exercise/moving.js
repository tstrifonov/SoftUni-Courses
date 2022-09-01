function moving(input) {
    let index = 0;
    let widthDimensions = Number(input[index]);
    index++;
    let lengthDimensions = Number(input[index]);
    index++;
    let heightDimensions = Number(input[index]);
    index++;
    let boxesNumber = widthDimensions * lengthDimensions * heightDimensions;
    let command = input[index];
    let boxesMovedNow = Number(input[index]);

    while (command !== "Done") {
        if (boxesNumber <= 0) {
            break;
        }

        boxesNumber = boxesNumber - boxesMovedNow;
        index++;
        command = input[index];
        boxesMovedNow = Number(input[index]);
    }

    if (command === "Done"){
        console.log(`${boxesNumber} Cubic meters left.`);
    } else {
        boxesNumber = boxesNumber * (-1);
        console.log(`No more free space! You need ${boxesNumber} Cubic meters more.`);
    }

}

moving(["10", "10", "2", "20", "Done", "20", "20", "122"]);
