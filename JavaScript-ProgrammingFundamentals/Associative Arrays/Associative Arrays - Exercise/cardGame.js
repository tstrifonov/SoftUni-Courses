function cardGame(input) {
    let players = {};

    for (let entry of input) {
        let name = entry.split(": ")[0];
        let cardsDrawn = entry.split(": ")[1].split(", ");

        if (!players.hasOwnProperty(name)) {
            players[name] = [];
        }
        players[name] = players[name].concat(cardsDrawn);
    }

    /*
    for (let player in players) {
        console.log(`${player}: ${players[player].join(" ")}`);
    }
    */

    for (let player in players) {
        let cards = players[player];
        let totalValue = 0;

        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            let previousCards = cards.slice(0, i);

            if (!previousCards.includes(card)) {
                card = card.split("");
                let type = card.pop();
                let power = card.join("");
              
    
                switch (power) {
                    case "2": power = Number(power); break;
                    case "3": power = Number(power); break;
                    case "4": power = Number(power); break;
                    case "5": power = Number(power); break;
                    case "6": power = Number(power); break;
                    case "7": power = Number(power); break;
                    case "8": power = Number(power); break;
                    case "9": power = Number(power); break;
                    case "10": power = Number(power); break;
                    case "J": power = 11; break;
                    case "Q": power = 12; break;
                    case "K": power = 13; break;
                    case "A": power = 14; break;
                }
    
                switch (type) {
                    case "S": type = 4; break;
                    case "H": type = 3; break;
                    case "D": type = 2; break;
                    case "C": type = 1; break;
                }
                let cardValue = power * type;
                totalValue += cardValue;
            }
        }

        players[player] = totalValue;
    }

   
    for (let player in players) {
        console.log(`${player}: ${players[player]}`);
    }
}

/*
You are given a sequence of people and for every person what cards he draws from the deck. 

The input will be an array of strings. Each string will be in the format:
{personName}: {PT, PT, PT,… PT}

Where P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A) is the power of the card and T (S, H, D, C) is the type. 
The name can contain any ASCII symbol except ':'. 
The input will always be valid and in the format described, there is no need to check it.

A single person cannot have more than one card with the same power and type, if he draws such a card he discards it.

The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type. 
Powers 2 to 10 have the same value and J to A are 11 to 14. Types are mapped to multipliers the following way (S -> 4, H-> 3, D -> 2, C -> 1).
Finally print out the total value each player has in his hand in the format:
{personName}: {value}
*/

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);
/*
Peter: 167
Tomas: 175
Andrea: 197
*/