function houseParty(arr) {
    let guestList = [];

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(" ")[0];
        let command = arr[i].split(" ")[2];

        if (command == "going!" && guestList.includes(name) == false) {
            guestList.push(name);
        } else if (command == "going!" && guestList.includes(name) == true) {
            console.log(`${name} is already in the list!`);
        } else if (command == "not" && guestList.includes(name) == false) {
            console.log(`${name} is not in the list!`);
        } else if (command == "not" && guestList.includes(name) == true) {
            guestList.splice(guestList.indexOf(name), 1);
        }
    }

    console.log(guestList.join("\n"));
}

houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
/*
John is not in the list!
Allie
*/

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);
/*
Tom is already in the list!
Tom
Annie
Garry
Jerry
*/

/*
Write a function that keeps track of guests that are going to a house party.
You will be given an array of strings. Each string will be one of the following:
⦁	"{name} is going!"
⦁	"{name} is not going!"
If you receive the first type of input, you have to add the person if he/she is not in the list (If he/she is in the list print: "{name} is already in the list!").
If you receive the second type of input, you have to remove the person if he/she is in the list (if not print: "{name} is not in the list!"). 
At the end print all the guests each on a separate line.
*/