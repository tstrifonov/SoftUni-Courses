function sumDigits(n) {
    let num = "" + n;
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }

    console.log(sum);
}

sumDigits(34567890);