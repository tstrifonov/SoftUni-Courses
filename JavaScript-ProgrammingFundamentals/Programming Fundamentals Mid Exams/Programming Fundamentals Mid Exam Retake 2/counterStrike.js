function counterStrike(input) {
    let currentEnergy = Number(input.shift());
    let wonBattles = 0;
    let distance = input.shift();

    while (distance != "End of battle" || input.length != 0) {
        if (currentEnergy >= Number(distance)) {
            currentEnergy -= Number(distance);
            wonBattles++;
            if (wonBattles % 3 == 0) {
                currentEnergy += wonBattles;
            }
        } else if (currentEnergy < Number(distance)) {
            break;
        }
        distance = input.shift();
    }
  
    if (distance != "End of battle") {
        console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${currentEnergy} energy`);
    } else {
        console.log(`Won battles: ${wonBattles}. Energy left: ${currentEnergy}`);
    }
}

/*
counterStrike((["100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"]));
/*
Not enough energy! Game ends with 7 won battles and 0 energy
*/

/*
counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"]));
/*
Won battles: 4. Energy left: 94
*/

counterStrike([100,
    10,
    10,
    10,
    1,
    2,
    3,
    73,
    10])