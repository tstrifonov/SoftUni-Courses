function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    
    for (let i = 0; i < arr.length; i++) {
            let command = arr[i].split(" ").shift();
            
            switch (command){
                case "Buy": buy(arr[i].split(" ")); break;
                case "Trash": trash(arr[i].split(" ")); break;
                case "Repair": repair(arr[i].split(" ")); break;
                case "Upgrade": upgrade(arr[i].split(" ")); break;
            }
        
    }

    console.log(inventory.join(" "));

    function buy(input) {
        if (inventory.includes(input[1]) == false) {
            inventory.push(input[1]);
        }
    }

    function trash(input) {
        if (inventory.includes(input[1])) {
            inventory.splice(inventory.indexOf(input[1]), 1);
        }
    }

    function repair(input) {
        if (inventory.includes(input[1])) {
            inventory.splice(inventory.indexOf(input[1]), 1);
            inventory.push(input[1]);
        }
    
    }

    function upgrade(input) {
        let item = input[1].split("-")[0];
        let upgrade = input[1].split("-")[1];
        let upgradedItem = item + ":" + upgrade;

        if (inventory.includes(item)) {
            inventory.splice(inventory.indexOf(item) + 1, 0, upgradedItem);
        }
    }
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']); //SWORD SWORD:Steel Bag Spear
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']); //SWORD Spear Shield
/*

/*
As a gladiator, Peter has a cool Inventory. He loves to buy new equipment. 
You are given Peter’s inventory with all of his equipment -> strings, separated by whitespace. 
You may receive the following commands:
⦁	Buy {equipment}
⦁	Trash {equipment}
⦁	Repair {equipment}
⦁	Upgrade {equipment}-{upgrade}
If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
If you receive the Trash command, delete the equipment if it exists.
If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
If you receive the Upgrade command, you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}".
*/