function phoneShop(input) {
    let phones = input.shift().split(", ");
    let command = input.shift();

    while (command != "End" && input.length > 0) {
        command = command.split(" - ");

        switch (command[0]) {
            case "Add": 
                if (phones.indexOf(command[1]) == -1) {
                    phones.push(command[1]);
                }
                break;

            case "Remove":
                if (phones.indexOf(command[1]) != -1) {
                    phones.splice(phones.indexOf(command[1]), 1);
                }
                break;

            case "Bonus phone": 
                let oldPhone = command[1].split(":")[0];
                let newPhone = command[1].split(":")[1];

                if (phones.indexOf(oldPhone) != -1) {
                    phones.splice(phones.indexOf(oldPhone) + 1, 0, newPhone);
                }
            break;

            case "Last":
                if (phones.indexOf(command[1]) != -1) {
                    phones.splice(phones.indexOf(command[1]), 1);
                    phones.push(command[1]);
                }
                break;
        }
        command = input.shift();
    }

    console.log(phones.join(", "));
}

/*
The possible commands are:
"Add - {phone}"
"Remove - {phone}"
"Bonus phone - {oldPhone}:{newPhone}"
"Last - {phone}"
"End"
*/

/*
phoneShop((["SamsungA50, MotorolaG5, IphoneSE",
"Add - Iphone10",
"Remove - IphoneSE",
"End"]));
//SamsungA50, MotorolaG5, Iphone10
*/

phoneShop((["HuaweiP20, XiaomiNote",
"Remove - Samsung",
"Bonus phone - XiaomiNote:Iphone5",
"End"]));
//HuaweiP20, XiaomiNote, Iphone5

/*
phoneShop((["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"]));
//MotorolaG5, HuaweiP10, SamsungA50
*/