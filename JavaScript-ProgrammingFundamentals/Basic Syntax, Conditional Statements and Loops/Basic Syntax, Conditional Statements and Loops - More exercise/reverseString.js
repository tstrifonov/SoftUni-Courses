function reverseString(string) {
    let reversedStr = "";
    
    for (let i = string.length - 1; i >= 0; i--) {
        let letter = string.charAt(i);
        reversedStr += letter;
    }

    console.log(reversedStr);
}

reverseString("Tihomir");

/*
Write a program that reverses a string and prints it on the console.
*/