/*
Create a JS factory function that returns a Card object holding the card’s face and suit. 
Throw an error if the card is initialized with an invalid face.
Valid card faces are: 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
Valid card suits are: S (♠), H (♥), D (♦), C (♣)
Both face and suit are expected as an uppercase string. The object also needs to have a toString() method 
that prints the card’s face and suit as a string. Use the following UTF code literals to represent the suits:
\u2660 – Spades (♠)
\u2665 – Hearts (♥)
\u2666 – Diamonds (♦)
\u2663 – Clubs (♣)
Input / Output
The factory function takes two string parameters. The toString() method of the returned object must return a string.
*/

function playingCards(face, suit) {
  const faces = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: "J",
    Q: "Q",
    K: "K",
    A: "A",
  };
  const suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (faces.hasOwnProperty(face) === false) {
    throw new Error("Face input is not valid! Try again!");
  }
  if (suits.hasOwnProperty(suit) === false) {
    throw new Error("Suit input is not valid! Try again!");
  }

  return `${faces[face]}${suits[suit]}`;
}

console.log(playingCards("A", "S"));
//	A♠
console.log(playingCards("10", "H"));
//	10♥
console.log(playingCards("1", "C"));
//	Error

try {
  playingCards("89", "C");
  console.log("Test pass");
} catch (error) {
  console.log(error);
}
