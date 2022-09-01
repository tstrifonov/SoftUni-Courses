function newHouse(input) {
    let flowerType = input[0];
    let quantity = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let endSum = 0;
    let difference = 0;

    switch (flowerType) {
        case "Roses": price = 5; break;
        case "Dahlias": price = 3.80; break;
        case "Tulips": price = 2.80; break;
        case "Narcissus": price = 3; break;
        case "Gladiolus": price = 2.50; break;
    }
    
    endSum = price * quantity;

    if (flowerType === "Roses" && quantity > 80) {
        endSum = endSum * 0.9;
    } else if (flowerType === "Dahlias" && quantity > 90) {
        endSum = endSum * 0.85;
    } else if (flowerType === "Tulips" && quantity > 80) {
        endSum = endSum * 0.85;
    } else if (flowerType === "Narcissus" && quantity < 120) {
        endSum = endSum * 1.15;
    } else if (flowerType === "Gladiolus" && quantity < 80) {
        endSum = endSum * 1.20;
    } 

    if (budget >= endSum) {
        difference = budget - endSum;
        console.log(`Hey, you have a great garden with ${quantity} ${flowerType} and ${difference.toFixed(2)} leva left.`);
    } else {
        difference = endSum - budget;
        console.log(`Not enough money, you need ${difference.toFixed(2)} leva more.`);
    }

}

newHouse(["Roses", "55", "250"]);