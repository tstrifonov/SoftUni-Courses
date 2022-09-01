function coins(input) {
 let moneyToReturn = Number(input[0]);
 moneyToReturn = moneyToReturn * 100;
let coinsNeededForChange = 0;

while (moneyToReturn > 0) {
    if (moneyToReturn >= 200) {
        moneyToReturn = moneyToReturn - 200;
    } else if (moneyToReturn >= 100) {
        moneyToReturn = moneyToReturn - 100;
    } else if (moneyToReturn >= 50) {
        moneyToReturn = moneyToReturn - 50;
    } else if (moneyToReturn >= 20) {
        moneyToReturn = moneyToReturn - 20;
    } else if (moneyToReturn >= 10) {
        moneyToReturn = moneyToReturn - 10;
    } else if (moneyToReturn >= 5) {
        moneyToReturn = moneyToReturn - 5;
    } else if (moneyToReturn >= 2) {
        moneyToReturn = moneyToReturn - 2;
    } else if (moneyToReturn >= 1) {
        moneyToReturn = moneyToReturn - 1;
    } 
    coinsNeededForChange++;
}
console.log(coinsNeededForChange);  
}

coins(["10.77"]);
