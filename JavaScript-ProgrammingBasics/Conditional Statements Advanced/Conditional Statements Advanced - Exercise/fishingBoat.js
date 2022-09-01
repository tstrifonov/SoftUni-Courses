function fishingBoat(input) {
    let budjet = Number(input[0]);
    let season = input[1];
    let fishers = Number(input[2]);
    let price = 0;
    let difference = 0;

    switch (season) {
        case "Spring": price = 3000; break;
        case "Summer": price = 4200; break;
        case "Autumn": price = 4200; break;
        case "Winter": price = 2600; break;
    }

    if (fishers <= 6) {
        price = price * 0.9;

    } else if (fishers >= 7 && fishers <= 11) {
        price = price * 0.85;

    } else if (fishers >= 12) {
        price = price * 0.75;
    }

    if (season != "Autumn" && fishers % 2 === 0) {
        price = price * 0.95;
    }

    if (budjet >= price) {
        difference = budjet - price;
        console.log(`Yes! You have ${difference.toFixed(2)} leva left.`);

    } else {
        difference = price - budjet;
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva.`);
    }

}

fishingBoat("3400", "Winter", "5");