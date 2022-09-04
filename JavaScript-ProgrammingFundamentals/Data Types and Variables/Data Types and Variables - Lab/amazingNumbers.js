function amazingNumbers(num) {
    let sum = 0;
    let numString = "" + num;
    let flag = false;
    
    for (let i = 0; i < numString.length; i++) {
        sum += Number(numString[i]);
    }

    sum += "";

    for (let y = 0; y < sum.length; y++) {
        if (sum[y] == 9) {
            flag = true;
        }
    }

    if (flag) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }


}

amazingNumbers(1233);
