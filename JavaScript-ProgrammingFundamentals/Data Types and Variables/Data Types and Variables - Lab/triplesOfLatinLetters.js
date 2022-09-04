function triplesOfLatinLetters(n){
    for (let i = 0; i < n; i++) {
        let firstLetter = String.fromCharCode(97 + i);
        for (let y = 0; y < n; y++) {
            let secondtLetter = String.fromCharCode(97 + y);
            for (let u = 0; u < n; u++) {
                let thirdLetter = String.fromCharCode(97 + u);
                console.log(`${firstLetter}${secondtLetter}${thirdLetter}`);
            }
        }
    }
}

triplesOfLatinLetters(5);
