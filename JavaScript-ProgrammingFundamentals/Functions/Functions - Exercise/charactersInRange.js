function charactersInRange(charOne, charTwo) {
    let result = [];
    let indexOne = charOne.charCodeAt();
    let indexTwo = charTwo.charCodeAt();
    

    for (let i = Math.min(indexOne, indexTwo) + 1; i < Math.max(indexOne, indexTwo); i++) {
        result.push(String.fromCharCode(i));
    }

    return result.join(" ");
}

console.log(charactersInRange('#',':')); //$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
console.log(charactersInRange('C','#')); //$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
