function sequence2kPlus1(input) {
    let n = Number(input[0]);
    let currentNumber = Number(0*2 + 1);

    while (currentNumber <= n) {
        console.log(currentNumber);
        currentNumber = currentNumber * 2 + 1;   
    }
}

sequence2kPlus1(["40"]);