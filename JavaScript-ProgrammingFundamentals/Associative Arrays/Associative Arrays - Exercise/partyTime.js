function partyTime(input) {
    let guestList = {};
    let i = 0;
    let guest = input[i];

    while (guest != "PARTY") {
        let firstLetterofID = guest[0];
        
        if (firstLetterofID == Number(firstLetterofID)) {
            guestList[guest] = "VIP";
        } else {
            guestList[guest] = "regular";
        }

        i++;
        guest = input[i];
    }

    for (let u = i; u < input.length; u++) {
        let guest = input[u];

        if (guestList[guest]) {
            delete guestList[guest];
        }
    }

    let sortedGuestListArr = Object.entries(guestList).sort((kvpA, kvpB) => kvpB[1].localeCompare(kvpA[1]));

    console.log(sortedGuestListArr.length);

    for (let guest of sortedGuestListArr) {
        console.log(guest[0]);
    }
}

/*
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
When guests come to the party check if he/she contains in any of the two reservation lists. 
The input will come as an array of strings. You will be given the list with the guests before you receive a command "PARTY".
All VIP numbers start with a digit.
When you receive the command "PARTY", the guests start coming.
Print the count of guests then all guests, who didn't come to the party (VIP must be printed first). 
Hint: Guest names are not unique. Only the first match is removed when receiving a name.
*/

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'CQBGUeJ',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'xys2FYzn',
'MDzcM9ZK',
'PARTY',
'2FQZT3uC',
'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',
'8N0FThqG',
'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]);
/*
2
xys2FYzn
MDzcM9ZK
*/