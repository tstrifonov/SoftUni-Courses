function cake(input) {
let index = 0;
let cakeWidth = Number(input[index]);
index++;
let cakeLength = Number(input[index]);
index++;
let totalPeacesOfCake = cakeWidth * cakeLength;

let piecesOfCakeLeft = totalPeacesOfCake;

let command = input[index];

let currentPiecesEaten = Number(input[index]);

while (command !== "STOP") {
    piecesOfCakeLeft = piecesOfCakeLeft - currentPiecesEaten; 
   
    if (piecesOfCakeLeft <= 0) {
        break;
    }

    index++;
    command = input[index];
    currentPiecesEaten = Number(input[index]); 
    
}

if (piecesOfCakeLeft > 0) {
    console.log(`${piecesOfCakeLeft} pieces are left.`);
} else {
    piecesOfCakeLeft = piecesOfCakeLeft * (-1);
    console.log(`No more cake left! You need ${piecesOfCakeLeft} pieces more.`);
}

}

cake(["10", "10", "20", "20", "20", "20", "21"]);
