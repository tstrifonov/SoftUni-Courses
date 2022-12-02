function secretChatProblemDescription(input) {
//receive the concealed message and the instructions for manipulation
    let [concealedMessage, ...instructions] = input;
    let command = instructions.shift();

//manipulate the concealed message
    while (command != "Reveal") {
        command = command.split(":|:");
        let operation = command[0];

        switch (operation) {
            case "InsertSpace":
                let index = Number(command[1]);
                concealedMessage = concealedMessage.slice(0, index) + " " + concealedMessage.slice(index);
                console.log(concealedMessage);
                break;
            
            case "Reverse":
                let substring = command[1];
                if (concealedMessage.indexOf(substring) != -1) {
                    let startIndex = concealedMessage.indexOf(substring);
                    let endIndex = concealedMessage.indexOf(substring) + substring.length;
                    concealedMessage = concealedMessage.slice(0, startIndex) + concealedMessage.slice(endIndex);
                    substring = substring.split("").reverse().join("");
                    concealedMessage += substring;
                    console.log(concealedMessage);
                } else {
                    console.log("error");
                }
                break;
            
            case "ChangeAll":
                let substringReplaced = command[1];
                let replacement = command[2];

                while (concealedMessage.indexOf(substringReplaced) != -1) {
                    let startIndex = concealedMessage.indexOf(substringReplaced);
                    let endIndex = concealedMessage.indexOf(substringReplaced) + substringReplaced.length;
                    concealedMessage = concealedMessage.slice(0, startIndex) + replacement + concealedMessage.slice(endIndex);
                }
                console.log(concealedMessage);
                break;
        }

        command = instructions.shift()
    }

//print the final message
    console.log(`You have a new text message: ${concealedMessage}`);
}

secretChatProblemDescription([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
  ]);
/*
hellodar!gnil
hellodarling!
hello darling!
You have a new text message: hello darling!
*/

secretChatProblemDescription([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]);
/*
Howare?uoy
Howareyou?
error
How areyou?
How are you?
You have a new text message: How are you?
*/