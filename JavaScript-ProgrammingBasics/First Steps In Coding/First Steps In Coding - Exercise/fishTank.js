function fishTank (input) {
    let sideA = (Number(input[0]))/10;
    let sideB = (Number(input[1]))/10;
    let sideC = (Number(input[2]))/10;
    let percentTaken = Number(input[3]);

    let volumeTotal = sideA * sideB * sideC;
    let volumeFree = volumeTotal * ((100-percentTaken)/100);

    console.log (volumeFree);
}

fishTank(["10", "20", "15", "30"]);