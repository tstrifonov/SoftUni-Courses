function perfectNumber(num) {
    let flag = true;

    if (num <= 0) {
        flag = false;
    } else {
        let sumDivisors = 0;

        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                sumDivisors += i;
            }
        }

        if (sumDivisors / 2 != num) {
            flag = false;
        }
    }

    if (flag) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6); // We have a perfect number!
perfectNumber(28); // We have a perfect number!
perfectNumber(1236498); //It's not so perfect.