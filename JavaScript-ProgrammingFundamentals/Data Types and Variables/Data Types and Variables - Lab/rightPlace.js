function rightPlace(stringOne, charMissing, stringTwo) {
    let fixedString = "";

    for (let i = 0; i < stringOne.length; i++) {
        let letter = stringOne[i];
       
        if (letter === '_') {
            letter = charMissing;
        }

        fixedString += letter;
    }

    if (fixedString === stringTwo) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');