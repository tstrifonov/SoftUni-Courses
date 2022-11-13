function revealWords(wordsString, template) {
    let words = wordsString.split(", ");
    let result = template.split(" ");

    for (let word of words) {
        for (let templateWord of result) {
                if (templateWord.startsWith("*") && templateWord.endsWith("*")) {
                    if (word.length == templateWord.length) {
                        result[result.indexOf(templateWord)] = word;
                    }
                }
        }
    }

    console.log(result.join(" "));
}

revealWords('great',
'softuni is ***** place for learning new programming languages');
//softuni is great place for learning new programming languages

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');
//softuni is great place for learning new programming languages

/*
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string that contains templates containing '*'.
Find the word with the same length as the template and replace it.
*/