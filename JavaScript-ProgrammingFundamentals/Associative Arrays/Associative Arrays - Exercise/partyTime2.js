function partyTime(input) {
    let vipGuests = [];
    let regularGuests = [];

    let invitation = input.shift();

    while(invitation != "PARTY") {
        let firstLetter = isNaN(invitation[0]);
        
        if(firstLetter) {
            regularGuests.push(invitation);
        } else {
            vipGuests.push(invitation);
        }

        invitation = input.shift();
    }

    for (let guest of input) {
        let firstLetter = isNaN(guest[0]);
        
        if(firstLetter) {
            let indexOfGuest = regularGuests.indexOf(guest);
           regularGuests.splice(indexOfGuest, 1);
        } else {
            let indexOfGuest = vipGuests.indexOf(guest);
            vipGuests.splice(indexOfGuest, 1);
        }
    }

    console.log(vipGuests.length + regularGuests.length);
    
    if (vipGuests.length > 0) {
        for (let guest of vipGuests) {
            console.log(guest);
        }
    }

    if (regularGuests.length > 0) {
        for (let guest of regularGuests) {
            console.log(guest);
        }
    }
}

partyTime(['m8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ',
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