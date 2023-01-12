function hogwartsTwo(input) {
    let spell = input.shift();
    let instructions = input.shift();

    while (instructions != "Abracadabra") {
        instructions = instructions.split(" ");
        let command = instructions[0];

        switch (command) {
            
            case "Abjuration": 
                spell = spell.toUpperCase();
                console.log(spell);
            break;

            case "Necromancy":
                spell = spell.toLowerCase();
                console.log(spell);
            break;

            case "Illusion":
                let index = Number(instructions[1]);
                let letter = instructions[2];
                if (index < 0 || index >= spell.length) {
                    console.log("The spell was too weak.");
                } else {
                    spell = spell.split("");
                    spell[index] = letter;
                    spell = spell.join("");
                    console.log("Done!")
                }
            break;

            case "Divination":
                let firstSubstring = instructions[1];
                let secondSubstring = instructions[2];
                if (spell.includes(firstSubstring)) {
                    while(spell.includes(firstSubstring)) {
                        spell = spell.replace(firstSubstring, secondSubstring);
                        
                    }
                    console.log(spell);
                }
            break;

            case "Alteration":
                let substring = instructions[1];
                if (spell.includes(substring)) {
                    spell = spell.slice(0, spell.indexOf(substring)) + spell.slice(spell.indexOf(substring) + substring.length);
                    console.log(spell);
                }
            break;

            default:
                console.log("The spell did not work!");
        }
    }
}


hogwartsTwo((["A7ci0",
"Illusion 1 c",
"Illusion 4 o",
"Abjuration",
"Abracadabra"]));
/*
Done!
Done!
ACCIO
*/

console.log("-------------");

hogwartsTwo((["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"]));
/*
tr1gg3r
The spell was too weak.
The spell was too weak.
*/

console.log("-------------");

hogwartsTwo((["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Alteration master",
"Abracadabra"]));
/*
The spell did not work!
SWORDMASTER
swordmaster
sword
*/