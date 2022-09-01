function braceletStand(input) {
    let pocketMoney = Number(input[0]) * 5;
    let salesMoney = Number(input[1]) * 5;
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);
    let savings = pocketMoney + salesMoney - expenses;

    if ((pocketMoney + salesMoney - expenses) >= giftPrice) {
        
        console.log(`Profit: ${savings.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let moneyNeeded = giftPrice - savings;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }
}

braceletStand(["15.20", "200.00", "7.30", "1500.12"]);