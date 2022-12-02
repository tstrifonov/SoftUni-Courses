function passwordReset(input) {
    let password = input.shift();
    let instructions = input;
    let command = instructions.shift();

    while (command != "Done") {
        let specificCommand = command.split(" ")[0];

        switch (specificCommand) {
            
            case "TakeOdd": 
                let oddLetters = "";
                for (let i = 1; i < password.length; i += 2) {
                    oddLetters += password[i];
                }
                password = oddLetters;
                console.log(password);
            break;

            case "Cut":
                let index = Number(command.split(" ")[1]);
                let length = Number(command.split(" ")[2]);
                let substring = password.slice(index, index + length);
                password = password.slice(0, password.indexOf(substring)) + password.slice((password.indexOf(substring) + substring.length));
                console.log(password);
            break;

            case "Substitute":
                let substringTwo = command.split(" ")[1];
                let substitute = command.split(" ")[2];
                if (password.includes(substringTwo)) {
                    while (password.includes(substringTwo)) {
                        password = password.replace(substringTwo, substitute);
                    }
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
            break;
        }

        command = instructions.shift();
    }

    console.log(`Your password is: ${password}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]));
/*
icecream::hot::summer
icecream::hot::mer
icecream-hot-mer
Nothing to replace!
Your password is: icecream-hot-mer
*/

console.log("-----------------");

passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]));
/*
programming!is!funny
programming!is!fun
programming***is***fun
Nothing to replace!
Your password is: programming***is***fun
*/