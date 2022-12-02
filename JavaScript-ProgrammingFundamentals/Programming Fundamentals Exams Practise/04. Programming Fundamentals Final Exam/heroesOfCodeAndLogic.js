function heroesOfCodeAndLogic(input) {
    //create your heroes
    let n = Number(input.shift());
    let heroes = {};
    for (let i = 0; i < n; i++) {
        let heroName = input[i].split(" ")[0];
        let healthPoints = Number(input[i].split(" ")[1]);
        let manaPoints = Number(input[i].split(" ")[2]);
        if (healthPoints > 100) {
            healthPoints = 100;
        }
        if (manaPoints > 200) {
            healthPoints = 200;
        }

        if (!heroes.hasOwnProperty(heroName)) {
            heroes[heroName] = {};
            heroes[heroName].healthPoints = healthPoints;
            heroes[heroName].manaPoints = manaPoints;
        }
    }

    //play the game
    let commands = input.slice(n);
    let command = commands.shift();

    while (command != "End"){
        command = command.split(" - ");
        let action = command[0];
        let heroName = command[1];

        switch (action) {

            case "CastSpell":
                let manaNeeded = Number(command[2]);
                let spellName = command[3];
                if (heroes[heroName].manaPoints >= manaNeeded) {
                    heroes[heroName].manaPoints -= manaNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].manaPoints} MP!`)
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
            break;

            case "TakeDamage":
                let dmgTaken = Number(command[2]);
                let attacker = command[3];
                heroes[heroName].healthPoints -= dmgTaken;
                if (heroes[heroName].healthPoints > 0) {
                    console.log(`${heroName} was hit for ${dmgTaken} HP by ${attacker} and now has ${heroes[heroName].healthPoints} HP left!`);
                } else {
                    delete heroes[heroName];
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }

            break;

            case "Recharge":
                let amountMana = Number(command[2]);
                
                if (heroes[heroName].manaPoints + amountMana > 200) {
                    amountMana = 200 - heroes[heroName].manaPoints;
                }
                heroes[heroName].manaPoints += amountMana;
                console.log(`${heroName} recharged for ${amountMana} MP!`);
            break;

            case "Heal":
                let amountHealth = Number(command[2]);
                if (heroes[heroName].healthPoints + amountHealth > 100) {
                    amountHealth = 100 - heroes[heroName].healthPoints;
                } 
                heroes[heroName].healthPoints += amountHealth;
                console.log(`${heroName} healed for ${amountHealth} HP!`);
            break;
            
        }

        command = commands.shift();
    }
 
    //print live heroes
    let liveHeroes = Object.entries(heroes);

    for (let hero of liveHeroes) {
        let liveHeroName = hero[0];
        console.log(liveHeroName);
        console.log(`  HP: ${heroes[liveHeroName].healthPoints}`);
        console.log(`  MP: ${heroes[liveHeroName].manaPoints}`);
    }
}

heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
/*
Solmyr healed for 10 HP!
Solmyr recharged for 50 MP!
Kyrre was hit for 66 HP by Orc and now has 33 HP left!
Kyrre has successfully cast ViewEarth and now has 35 MP!
Solmyr
  HP: 95
  MP: 170
Kyrre
  HP: 33
  MP: 35
*/