function mergeArrays(arrA, arrB) {
    let arrC = [];

    for (let i = 0; i < arrA.length; i++) {
        if (i % 2 == 0) {
            arrC[i] = Number(arrA[i]) + Number(arrB[i]);
        } else {
            arrC[i] = "" + arrA[i] + arrB[i];
        }
    }

    console.log(arrC.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);
