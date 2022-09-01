function oldBooks2(input) {
    let index = 0;
    let aniFavouriteBook = input[index];
    index++;
    let currentBook = input[index];
    let booksChecked = 0;

    while (currentBook !== "No More Books") {
        if (aniFavouriteBook === currentBook) {
            break;
        }
        booksChecked++;
        index++;
        currentBook = input[index];
    }

    if (currentBook !== aniFavouriteBook) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecked} books.`);
    } else if (currentBook === aniFavouriteBook) {
        console.log(`You checked ${booksChecked} books and found it.`);
    }

}

oldBooks2(["The Spot", "Hunger Games", "Harry Potter", "Torronto", "Spotify", "No More Books"]);
