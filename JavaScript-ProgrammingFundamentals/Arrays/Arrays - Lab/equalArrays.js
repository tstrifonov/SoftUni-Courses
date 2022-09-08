function equalArrays(arrOne, arrTwo) {
    let sum = 0;
    let flag = true;

    for (let i = 0; i < arrOne.length; i++) {
        if (arrOne[i] !== arrTwo[i]) {
            flag = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        } else {
            sum += Number(arrOne[i]);
        }
    }

    if (flag === true) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);