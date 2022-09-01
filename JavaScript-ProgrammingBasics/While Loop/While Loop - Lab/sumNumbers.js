function sumNumbers(input) {
    let index = 0;
    let firstNumber = Number(input[index]);
    index++;
    let followingNumbers = 0;
    let sum = 0;

    while (sum < firstNumber) {
        followingNumbers = Number(input[index]);
        sum += followingNumbers;
        index++;
    }

    console.log(sum);
}

sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
