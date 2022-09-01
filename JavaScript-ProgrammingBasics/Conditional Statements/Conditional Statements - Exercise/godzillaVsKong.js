function godzillaVsKong(input) {
    let budjet = Number(input[0]);
    let statists = Number(input[1]);
    let priceForClothes = Number(input[2]);
    let decor = Number(0.10 * budjet);
    let moneyDifference = 0;

    if (statists > 150) {
        priceForClothes = priceForClothes * 0.9;
    }

    if ((decor + (priceForClothes*statists)) > budjet) {
        moneyDifference = Number((decor + (priceForClothes*statists)) - budjet);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyDifference.toFixed(2)} leva more.`);

    } else {
        moneyDifference = Number(budjet - (decor + (priceForClothes*statists)));
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyDifference.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["1", "1", "1"]);