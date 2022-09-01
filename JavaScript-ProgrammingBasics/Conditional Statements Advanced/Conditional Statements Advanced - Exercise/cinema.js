function cinema(input) {
    let movie = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let price = 0;
    let finalSum = 0;

    switch (movie)  {
        case "Premiere": price = 12.00; break;
        case "Normal": price = 7.50; break;
        case "Discount": price = 5.00; break;
    }

    finalSum = r * c * price;

    console.log(`${finalSum.toFixed(2)} leva`);
}

cinema(["Premiere", "5", "6"]);
