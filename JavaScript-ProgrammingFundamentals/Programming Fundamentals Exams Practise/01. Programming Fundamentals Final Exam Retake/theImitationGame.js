function theImitationGame(input) {
    let encryptedMessage = input.shift();
    let instructions = input.shift();

    while (instructions != "Decode") {
        instructions = instructions.split("|");
        let instructionType = instructions[0];

        switch (instructionType){
           
            case "Move": 
                let n = Number(instructions[1]);
                encryptedMessage = encryptedMessage.split("");

                for (let i = 0; i < n; i++) {
                   let movedLetter = encryptedMessage.shift();
                   encryptedMessage.push(movedLetter);
                }

                encryptedMessage = encryptedMessage.join("");
            break;

            case "Insert": 
                let index = Number(instructions[1]);
                let value = instructions[2];

                encryptedMessage = encryptedMessage.split("");
                encryptedMessage.splice(index, 0, value);
                encryptedMessage = encryptedMessage.join("");
            break;

            case "ChangeAll": 
                let substring = instructions[1];
                let replacement = instructions[2];

                while (encryptedMessage.includes(substring)) {
                    encryptedMessage = encryptedMessage.split("");
                    encryptedMessage.splice(encryptedMessage.indexOf(substring), substring.length, replacement);
                    encryptedMessage = encryptedMessage.join("");
                }
            break;
        }

        instructions = input.shift();
    }

    console.log(`The decrypted message is: ${encryptedMessage}`);
}

/*
On the first line of the input, you will receive the encrypted message. 
After that, until the "Decode" command is given, you will be receiving strings with instructions 
for different operations that need to be performed upon the concealed message to interpret it and reveal its true 
content. 

There are several types of instructions, split by '|'
1) "Move {number of letters}":
Moves the first n letters to the back of the string
2) "Insert {index} {value}":
Inserts the given value before the given index in the string
3) "ChangeAll {substring} {replacement}":
Changes all occurrences of the given substring with the replacement text

Input / Constraints
On the first line, you will receive a string with a message.
On the following lines, you will be receiving commands, split by '|' .
Output
After the "Decode" command is received, print this message:
"The decrypted message is: {message}"
*/

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
/*
The decrypted message is: Hello
*/

theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]);
/*
The decrypted message is: howareyou?
*/