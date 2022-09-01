function EnglishNameOfTheLastDigit(n) {
    let x = n % 10;
    let letter = "";

    switch (x) {
        case 1: letter = "one"; break;
        case 2: letter = "two"; break;
        case 3: letter = "three"; break;
        case 4: letter = "four"; break;
        case 5: letter = "five"; break;
        case 6: letter = "six"; break;
        case 7: letter = "seven"; break;
        case 8: letter = "eight"; break;
        case 9: letter = "nine"; break;
        case 0: letter = "zero"; break;
    }

    console.log(letter);
}

EnglishNameOfTheLastDigit(5125);

/*

*/