function arenaTier(input) {
    let command = input.shift();
    let gladiatorPool = {};

    while (command != "Ave Cesar") {
        command = command.split(" ");
        
        if (command.includes("vs")) {
            let gladiatorA = command[0];
            let gladiatorB = command[2];

            if (gladiatorPool.hasOwnProperty(gladiatorA) && gladiatorPool.hasOwnProperty(gladiatorB)) {
                let gladiatorAentries = Object.entries(gladiatorPool[gladiatorA]);
                let gladiatorBentries = Object.entries(gladiatorPool[gladiatorB]);

                for (let entryA of gladiatorAentries) {
                    let techniqueA = entryA[0];
                    let skillA = entryA[1];
                    
                    for (let entryB of gladiatorBentries) {
                        let techniqueB = entryB[0];
                        let skillB = entryB[1];

                        if (techniqueA == techniqueB && skillA > skillB) {
                            delete gladiatorPool[gladiatorB];
                        } else if (techniqueA == techniqueB && skillB > skillA) {
                            delete gladiatorPool[gladiatorA];
                        }
                    }
                }

            }

        } else {
            let gladiator = command[0];
            let technique = command[2];
            let skill = Number(command[4]);

            if (!gladiatorPool.hasOwnProperty(gladiator)) {
                gladiatorPool[gladiator] = {};
                gladiatorPool[gladiator][technique] = 0;
            }

            if (!gladiatorPool[gladiator].hasOwnProperty(technique)) {
                gladiatorPool[gladiator][technique] = 0;
            }

            if (gladiatorPool[gladiator][technique] < skill) {
                gladiatorPool[gladiator][technique] = skill;
            }
        }

        command = input.shift();
    }


    for (let gladiator in gladiatorPool) {
       let skillTotal = 0;
       
       for (let technique in gladiatorPool[gladiator]) {
        skillTotal += gladiatorPool[gladiator][technique];
       }
       gladiatorPool[gladiator]["skillTotal"] = skillTotal;
    }

    let gladiatorPoolArr = Object.entries(gladiatorPool);
    gladiatorPoolArr.sort((a, b) => b[1]["skillTotal"] - a[1]["skillTotal"]);

    for (let i = 0; i < gladiatorPoolArr.length - 1; i++) {
        let filler = gladiatorPoolArr[i];

        if (gladiatorPoolArr[i][1]["skillTotal"] == gladiatorPoolArr[i+1][1]["skillTotal"]) {
            if (gladiatorPoolArr[i][0] > gladiatorPoolArr[i+1][0]) {
                gladiatorPoolArr[i] = gladiatorPoolArr[i+1];
                gladiatorPoolArr[i+1] = filler;
            }
        }
    }    
    
    for (let gladiator of gladiatorPoolArr) {
        console.log(`${gladiator[0]}: ${gladiator[1]["skillTotal"]} skill`);
        delete gladiatorPool[gladiator[0]]["skillTotal"];
        let sortedTechniques = Object.entries(gladiatorPool[gladiator[0]]);
            sortedTechniques.sort((a, b) => b[1] - a[1]);

            for (let i = 0; i < sortedTechniques.length - 1; i++) {
                let filler = sortedTechniques[i];
        
                if (sortedTechniques[i][1] == sortedTechniques[i+1][1]) {
                    if (sortedTechniques[i][0] > sortedTechniques[i+1][0]) {
                        sortedTechniques[i] = sortedTechniques[i+1];
                        sortedTechniques[i+1] = filler;
                    }
                }
            } 

        for (let technique of  sortedTechniques) {
            console.log(`- ${technique[0]} <!> ${technique[1]}`);

        }
    } 
}

/*
You will receive several input lines in one of the following formats:
"{gladiator} -> {technique} -> {skill}"
"{gladiator} vs {gladiator}"

The gladiator and technique are strings, the given skill will be an integer number. You need to keep track of every gladiator. 

When you receive a gladiator and his technique and skill, add him to the gladiator pool, if he isn't present, else add his technique or update his skill, only if the current technical skill is lower than the new value.

If you receive "{gladiator} vs {gladiator}" and both gladiators exist in the tier, they duel with the following rules:

Compare their techniques, if they got at least one in common, the gladiator with better total skill points wins and the other is demoted from the tier -> remove him.

If they don't have techniques in common, the duel isn't happening and both continue in the Season.

You should end your program when you receive the command "Ave Cesar". At that point, you should print the gladiators, ordered by total skill in descending order, then ordered by name in ascending order. Foreach gladiator prints their technique and skill ordered descending, then ordered by technique name in ascending order.

Input / Constraints
You will receive an array of strings as a parameter to your solution.
The input comes in the form of commands in one of the formats specified above.
Gladiator and technique will always be one-word string, containing no whitespaces.
Skill will be an integer in the range [0, 1000].
There will be no invalid input lines.
The program ends when you receive the command "Ave Cesar".
Output
The output format for each gladiator is:
"{gladiator}: {totalSkill} skill"
"- {technique} <!> {skill}"

*/

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);
/*
Result:
Stefan: 450 skill
- Tiger <!> 250
- Duck <!> 200
Peter: 400 skill
- BattleCry <!> 400
Alex: 300 skill
- PowerPunch <!> 300

Comment:
We order the gladiators by total skill points descending, then by name. We print every technique along its skill ordered descending by skill, then by technique name.
 */

console.log("------------------");

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ]);
/*
Result:
Gladius: 700 skill
- Shield <!> 250
- Support <!> 250
- Heal <!> 200
Peter: 400 skill
- Duck <!> 400

Comment:
Gladius and Peter don't have a common technique, so the duel isn't valid.
Gladius wins vs Julius /common technique: "Shield". Julius is demoted.
Maximilian doesn't exist so the duel isn't valid.
We print every gladiator left in the tier.
 */
