function numberPyramid(input) {
let n = Number(input[0]);
let printedNumber = 1;
let flag = false;

for (let row = 1; row <= n; row++){

    let currentRow = "";

    for (let collum = 1; collum <= row; collum++) {
        currentRow = currentRow + ` ${printedNumber}`;
        if (printedNumber == n) {
            flag = true;
            break;
        }
        printedNumber++;
    }

    console.log(currentRow);

    if (flag == true) {
        break;
    }
    
}

}

numberPyramid(["45"]);