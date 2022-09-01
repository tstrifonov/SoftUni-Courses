function histogram(input) {
    let arrayLength = Number(input[0]);
    let number = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= arrayLength; i++) {
        number = Number(input[i]);

        if (number < 200) {
            p1 += 1;
        } else if (number >= 200 && number <= 399) {
            p2 += 1;   
        } else if (number >= 400 && number <= 599) {
            p3 += 1;
        } else if (number >= 600 && number <= 799) {
            p4 += 1;
        } else if (number >= 800) {
            p5 += 1;
        }

    }

    let p1Perc = p1 / arrayLength * 100;
    let p2Perc = p2 / arrayLength * 100;
    let p3Perc = p3 / arrayLength * 100;
    let p4Perc = p4 / arrayLength * 100;
    let p5Perc = p5 / arrayLength * 100;

    console.log(`${p1Perc.toFixed(2)}%`);
    console.log(`${p2Perc.toFixed(2)}%`);
    console.log(`${p3Perc.toFixed(2)}%`);
    console.log(`${p4Perc.toFixed(2)}%`);
    console.log(`${p5Perc.toFixed(2)}%`);

}

histogram(["3", "1", "2", "999"]);