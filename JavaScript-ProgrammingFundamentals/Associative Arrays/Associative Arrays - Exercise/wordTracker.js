function wordTracker(input) {
    let countedWords = input.shift().split(" ");
    let result = {};

    for (let word of countedWords) {
        result[word] = 0;
    }

    for (let word of input) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        }
    }

    let sortedResult = Object.entries(result).sort((kvpA, kvpB) => kvpB[1] - kvpA[1]);

    for (let word of sortedResult) {
        console.log(`${word[0]} - ${word[1]}`);
    }
}

wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]);
/*
this - 3
sentence - 2
*/

/*
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as an array of strings. The first string will contain the words you will be looking for separated by a space. 
All strings after that will be the words in which you will check for a match.
Print for each word how many times it occurs. The words should be sorted by count in descending.
*/
