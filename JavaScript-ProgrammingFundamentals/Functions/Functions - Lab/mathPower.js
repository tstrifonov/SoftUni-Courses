function mathPower(number, power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= number;
    }

    console.log(result);
}

mathPower(2, 4);
mathPower(10, 3);