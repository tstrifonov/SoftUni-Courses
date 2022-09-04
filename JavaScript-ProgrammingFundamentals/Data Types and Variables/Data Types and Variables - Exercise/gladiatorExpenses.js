function gladiatorExpenses(lostFights, helmetP, swordP, shieldP, armorP) {
    let totalExpenses = 0;

    for (let i = 1; i <= lostFights; i++) {
        
        if (i % 12 == 0) {
            totalExpenses += helmetP + swordP + shieldP + armorP;
        } else if (i % 6 == 0) {
            totalExpenses += helmetP + swordP + shieldP;
        } else if (i % 2 == 0) {
            totalExpenses += helmetP;
        } else if (i % 3 ==0) {
            totalExpenses += swordP;
        }
    }

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23,12.50, 21.50, 40, 200);