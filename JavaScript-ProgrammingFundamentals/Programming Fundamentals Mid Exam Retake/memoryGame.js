function memoryGame(input) {
    let elements = input.shift().split(" ");
    let i = 0;
    let indexes = input.shift().split(" ");

    while (indexes != "end") {
        if (elements.length == 0) {
            console.log(`You have won in ${i} turns!`);
            break;
        }

        let a = Number(indexes[0]);
        let b = Number(indexes[1]);

        if (a == b || elements[a] == undefined || elements[b] == undefined) {
            elements.splice(elements.length / 2, 0, `-${i + 1}a`, `-${i + 1}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (elements[a] == elements[b]) {
            let removedElement = elements[a];

            if (a > b) {
                let c = b;
                b = a;
                a = c;
            }

            elements.splice(a, 1);
            elements.splice(b - 1, 1);
            console.log(`Congrats! You have found matching elements - ${removedElement}!`);
        } else if (elements[a] != elements[b]) {
            console.log("Try again!");
        }

        i++;
        indexes = input.shift().split(" ");

        if (elements.length > 0 && indexes == "end") {
            console.log(`Sorry you lose :(`);
            console.log(elements.join(" "));
            break;
        }
    }
}


memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]);
/*
Congrats! You have found matching elements - 1!
Invalid input! Adding additional elements to the board
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 3!
Congrats! You have found matching elements - -1a!
Sorry you lose :(
4 4 5 5
*/

console.log("----------------------------");

memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
/*
Congrats! You have found matching elements - a!
Congrats! You have found matching elements - 2!
Congrats! You have found matching elements - 4!
You have won in 3 turns!
*/

console.log("----------------------------");

memoryGame([
    "a 2 4 a 2 4", 
    "4 0", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]);
/*
Try again!
Try again!
Try again!
Try again!
Sorry you lose :(
a 2 4 a 2 4
*/