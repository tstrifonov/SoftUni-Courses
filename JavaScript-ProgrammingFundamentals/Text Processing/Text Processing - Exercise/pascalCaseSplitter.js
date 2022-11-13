function pascalCaseSplitter(input) {
    let result = "";

    for (let char of input) {
        if (char.toLowerCase() !== char) {
            result += " " + char;
        } else {
            result += char;
        }
    }

    console.log(result.trim().split(" ").join(", "));
}

/*
You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.
*/

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
//Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

pascalCaseSplitter('ThisIsSoAnnoyingToDo');
//This, Is, So, Annoying, To, Do