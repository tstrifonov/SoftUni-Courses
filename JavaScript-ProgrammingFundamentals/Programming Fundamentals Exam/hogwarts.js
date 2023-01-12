function hogwarts(input) {
    //receive a spell that needs to be deciphered
    let spell = input.shift();
    let command = input.shift();

    //receive commands
    while (command != "Abracadabra") {
        command = command.split(" ");
        let instruction = command[0];

        switch (instruction) {

            case "Abjuration": 
                spell = spell.toUpperCase();
                console.log(spell);
            break;

            case "Necromancy":
                spell = spell.toLowerCase();
                console.log(spell);
            break;

            case "Illusion":
                let index = Number(command[1]);
                let letter = command[2];
                if (index >= 0 && index < spell.length) {
                    spell = spell.split("");
                    spell[index] = letter;
                    spell = spell.join("");
                    console.log("Done!")
                } else {
                    console.log("The spell was too weak.")
                }
            break;

            case "Divination":
                let firstSubstring = command[1];
                let secondSubstring = command[2];
                if (spell.includes(firstSubstring)) {
                    while(spell.includes(firstSubstring)) {
                        spell = spell.replace(firstSubstring, secondSubstring);
                        
                    }
                    console.log(spell);
                }
            break;

            case "Alteration":
                let substring = command[1];
                if (spell.includes(substring)) {
                    spell = spell.slice(0, spell.indexOf(substring)) + spell.slice(spell.indexOf(substring) + substring.length);
                    console.log(spell);
                }
            break;

            default:
                console.log("The spell did not work!");
            break;
        }

        command = input.shift();
        if (command != "Abracadabra" && input.length == 0) {
            break;
        }
    }
}


hogwarts((["A7ci0",
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

hogwarts((["TR1GG3R",
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

hogwarts((["SwordMaster",
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