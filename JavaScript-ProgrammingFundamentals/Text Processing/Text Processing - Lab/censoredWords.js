function censoredWords(text, word) {
    let result = text;

    while (result.includes(word)) {
        result = result.replace(word, "*".repeat(word.length));
    }

    console.log(result);
}

censoredWords('hidden Find hidden the hidden word hidden', 'hidden');
//Find the ****** word

/*
Write a function that receives a text as a first parameter and a single word as a second. 
Find all occurrences of that word in the text and replace them with the corresponding count of '*'.
*/