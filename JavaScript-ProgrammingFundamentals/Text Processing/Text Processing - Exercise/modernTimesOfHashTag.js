function modernTimesOfHashTag(input) {
    let modifiedText = input.split(" ");
    for (let word of modifiedText) {
        if (word.startsWith("#") && word.length > 1) {
            let printedWord = word.substring(1);
            let flag = true;

            for (let char of printedWord.toLowerCase()) {
                if (char.charCodeAt() < 97 && char.charCodeAt() > 122) {
                    flag = false;
                }
                
            }

            if (flag) {
                console.log(printedWord);
            }
        }
    }
}

modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
/*
special
socialMedia
*/

modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
/*
variously
regions
number
*/

/* 
The input will be a single string.
Find all special words starting with #. If the found special word does not consist only of letters, 
then it is invalid and should not be printed. 
Finally, print out all the special words you found without the label (#) on a new line.
*/