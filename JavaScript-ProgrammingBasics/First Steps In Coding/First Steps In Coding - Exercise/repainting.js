function repainting(input) {
    let nylonsSum = ((Number(input[0])) + 2) * 1.50;
    let paintSum = ((Number(input[1])) * 1.10) * 14.50;
    let diluentSum = (Number(input[2])) * 5.00;
    let hours = Number(input[3]);
    let bagsSum = 0.40;

    let pricePerHour = 0.3 * (nylonsSum + paintSum + diluentSum + bagsSum);

    let finalSum = ((hours * pricePerHour) + (nylonsSum + paintSum + diluentSum + bagsSum)).toFixed(2);

    console.log(finalSum);
}

repainting(["2", "3", "4", "5"]);
