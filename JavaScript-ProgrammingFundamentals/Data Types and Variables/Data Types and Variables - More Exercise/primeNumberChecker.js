function primeNumberChecker(n) {
    let flag = true;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        if (n  % i === 0) {
            count++;
        }
        if (count > 2) {
            flag = false;
            break;
        }
    }

    console.log(flag);
}

primeNumberChecker(3456);
primeNumberChecker(10);
primeNumberChecker(17);