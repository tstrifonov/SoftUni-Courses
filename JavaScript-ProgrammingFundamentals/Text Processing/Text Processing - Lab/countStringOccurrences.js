function countStringOccurrences(receivedText, receivedWord) {
    let counter = 0;
    let wordsArray = receivedText.split(" ");

    for (let word of wordsArray) {
        if (word == receivedWord) {
            counter++;
        }
    }

    console.log(counter);
}

countStringOccurrences('softuni is great place for learning new programming languages',
'softuni');
//1

countStringOccurrences('This is a word and it also is a sentence',
'is');
//2