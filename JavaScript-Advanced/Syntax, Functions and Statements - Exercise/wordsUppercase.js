function wordsUppercase(input) {
    const filter = /[A-z0-9]+/gm;
    const matches = input.match(filter);
    let upperCaseMatches = matches.slice();

    for (let i = 0; i < upperCaseMatches.length; i++) {
        upperCaseMatches[i] = upperCaseMatches[i].toUpperCase();
    }

    console.log(upperCaseMatches.join(", "));
}

wordsUppercase('Hi, how are you?');
//HI, HOW, ARE, YOU
wordsUppercase('hello');
//HELLO

/*
Write a program that extracts all words from a passed-in string and converts them to upper case. The extracted words in the upper case must be printed on a single line separated by ", ".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.
*/