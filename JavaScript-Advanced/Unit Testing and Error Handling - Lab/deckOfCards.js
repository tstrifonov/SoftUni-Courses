function printDeckOfCards(cards) {
  const result = [];

  for (let card of cards) {
    card = card.split("");
    const suit = card.pop();
    const face = card.join("");
    const currCard = createCard(face, suit);
    if (currCard == "Invalid card") {
      return console.log(`Invalid card: ${face}${suit}`);
    }
    result.push(currCard);
  }

  function createCard(face, suit) {
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

    if (
      faces.hasOwnProperty(face) === false ||
      suits.hasOwnProperty(suit) === false
    ) {
      return `Invalid card`;
    }

    return `${faces[face]}${suits[suit]}`;
  }

  console.log(result.join(" "));
}

printDeckOfCards(["AS", "10D", "KH", "2C"]);
//	A♠ 10♦ K♥ 2♣
printDeckOfCards(["5S", "3D", "QD", "1C"]);
//	Invalid card: 1C
