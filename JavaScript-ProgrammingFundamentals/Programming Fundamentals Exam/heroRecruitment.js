function heroRecruitment(input) {
    let heroes = {};
    let currentHero = input.shift("");

    while (currentHero != "End") {
        currentHero = currentHero.split(" ");
        let command = currentHero[0];
        let heroName = currentHero[1];

        switch (command) {

            case "Enroll":
                if (heroes.hasOwnProperty(heroName)) {
                    console.log(`${heroName} is already enrolled.`);
                } else {
                    heroes[heroName] = {};
                }
            break;

            case "Learn":
                let spellLearn = currentHero[2];
                if (!heroes.hasOwnProperty(heroName)) {
                    console.log(`${heroName} doesn't exist.`);
                } else {
                    if (heroes[heroName].hasOwnProperty(spellLearn)) {
                        console.log(`${heroName} has already learned ${spellLearn}`);
                    } else {
                        heroes[heroName][spellLearn] = spellLearn;
                    }
                }
            break;

            case "Unlearn":
                let spellUnlearn = currentHero[2];
                if (!heroes.hasOwnProperty(heroName)) {
                    console.log(`${heroName} doesn't exist.`);
                } else {
                    if (heroes[heroName].hasOwnProperty(spellUnlearn)) {
                        delete heroes[heroName][spellUnlearn];
                    } else {
                        console.log(`${heroName} doesn't know ${spellUnlearn}`);
                    }
                }
            break;
        }

        currentHero = input.shift("");
    }

    let endHeroes = Object.entries(heroes);
    
    console.log("Heroes:")
    for (let hero of endHeroes) {
        let name = hero[0];
        let allSpells = Object.keys(hero[1]);
        allSpells = allSpells.join(", ");
        console.log(`== ${name}: ${allSpells}`);
    }
}

heroRecruitment((["Enroll Stefan",
"Enroll Peter",
"Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn John ItShouldNotWork",
"Unlearn George Dispel",
"Unlearn Stefan ItShouldWork",
"End"]));
/*
Stefan is already enrolled.
John doesn't exist.
George doesn't exist.
Heroes:
== Stefan:
== Peter:
*/

console.log("-------");

heroRecruitment((["Enroll Stefan",
"Learn Stefan ItShouldWork",
"Learn Stefan ItShouldWork",
"Unlearn Stefan NotFound",
"End"]));
/*
Stefan has already learnt ItShouldWork.
Stefan doesn't know NotFound.
Heroes:
== Stefan: ItShouldWork
*/

console.log("-------");

heroRecruitment((["Enroll Stefan",
"Enroll Peter",
"Enroll John",
"Learn Stefan Spell",
"Learn Peter Dispel",
"End"]));
/*
Heroes:
== Stefan: Spell
== Peter: Dispel 
== John:
*/