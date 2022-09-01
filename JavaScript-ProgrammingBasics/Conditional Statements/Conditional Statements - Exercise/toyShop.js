function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toyCount = Number(puzzles + talkingDolls + teddyBears + minions + trucks);
    let toyPrice = Number((puzzles * 2.60) + (talkingDolls * 3) + (teddyBears * 4.10) + (minions * 8.20) + (trucks * 2));
    
    if (toyCount >= 50) {
        toyPrice = Number(toyPrice * 0.75);
    }

    let moneyEarned = Number(toyPrice * 0.9);
    let moneyLeftorNeeded = 0;

    if (moneyEarned >= tripPrice) {
        moneyLeftorNeeded = Number(moneyEarned - tripPrice);
        console.log(`Yes! ${moneyLeftorNeeded.toFixed(2)} lv left.`);
    } else {
        moneyLeftorNeeded = Number(tripPrice - moneyEarned);
        console.log(`Not enough money! ${moneyLeftorNeeded.toFixed(2)} lv needed.`);
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"])
