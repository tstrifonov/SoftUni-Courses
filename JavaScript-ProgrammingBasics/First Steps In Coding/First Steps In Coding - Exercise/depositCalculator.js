function depositCalculator(input) {
    let deposit = Number(input[0]);
    let period = Number(input[1]);
    let percent = Number(input[2]);

    let moneyGainForYear = Number(deposit * (percent/100));
    let moneyGainForMonth = Number(moneyGainForYear / 12);

    let ednSum = Number(deposit + (moneyGainForMonth * period));

    console.log (ednSum);
}

depositCalculator(["200", "3", "5.7"]);