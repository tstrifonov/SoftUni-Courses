function bitcoinMining(input) {
    let countBitcoins = 0;
    let day = 0;
    let money = 0;
    let gold = 0;

    for (let i = 1; i <= input.length; i++) {
        if (i % 3 === 0) {
            gold = input[i - 1] * 0.7;
            money += gold * 67.51;
        } else {
            gold = input[i - 1];
            money += gold * 67.51;
        }

        if (money >= 11949.16 && day === 0){
            day = i;
                do {
                money -= 11949.16;
                countBitcoins++;
                } while (money >= 11949.16);
            
        } else if (money >= 11949.16 && day != 0) {
            do {
                money -= 11949.16;
                countBitcoins++;
                } while (money >= 11949.16);
        }
    }

    console.log(`Bought bitcoins: ${countBitcoins}`);
    if (countBitcoins === 0) {
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Day of the first purchased bitcoin: ${day}`);
        console.log(`Left money: ${money.toFixed(2)} lv.`);
    }
}

bitcoinMining([100, 200, 300]);

/*
Print on the console these lines in the following formats:
First-line prints the total amount of bought bitcoins:
 `Bought bitcoins: {count}`
Second-line prints which day you bought your first bitcoin: 
 `Day of the first purchased bitcoin: {day}`
In case you did not purchase any bitcoins, do not print the second line.
Third-line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
  `Left money: {money} lv.`

*/