function repeatString(string, repeatCount) {
    let newString = "";

    for (let i = 1; i <= repeatCount; i++) {
        newString += string;
    }

    console.log(newString);
}

repeatString("abc", 3);