function experienceGaining(input) {
    let experienceNeeded = Number(input.shift());
    let battlesFought = Number(input.shift());
    let battleCount = 0;

    while (experienceNeeded > 0 && input.length > 0) {
        battleCount++;
        let expGained = Number(input.shift());

        if (battleCount % 3 == 0 && battleCount % 15 != 0) {
            expGained *= 1.15;
        } else if (battleCount % 5 == 0 && battleCount % 15 != 0) {
            expGained *= 0.90;
        } else if (battleCount % 15 == 0) {
            expGained *= 1.10;
        }

        experienceNeeded -= expGained;       
    }

    if (experienceNeeded > 0) {
        console.log(`Player was not able to collect the needed experience, ${experienceNeeded.toFixed(2)} more needed.`); 
    } else {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`); 
    }
}

experienceGaining([400, 5, 50, 100, 200, 100, 20]);
experienceGaining([500, 5, 50, 100, 200, 100, 20]);