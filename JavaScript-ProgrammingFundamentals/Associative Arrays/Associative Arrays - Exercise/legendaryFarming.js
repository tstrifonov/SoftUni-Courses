function legendaryFarming(input) {
    let materialsAndQuantities = input.split(" ");
    let materials = {};
    materials.shards = 0;
    materials.fragments = 0;
    materials.motes = 0;
    let obtainedItem = "";

    for (let i = 0; i < materialsAndQuantities.length; i += 2) {
        let material = materialsAndQuantities[i+1].toLowerCase();
        let quantity = Number(materialsAndQuantities[i]);

        if (!materials[material]) {
            materials[material] = 0;
        }
        materials[material] += quantity;

        if (materials.shards >= 250) {
            obtainedItem = "Shadowmourne";
            materials[material] -= 250;
            break;
        } else if (materials.fragments >= 250) {
            obtainedItem = "Valanyr";
            materials[material] -= 250;
            break;
        } else if(materials.motes >= 250) {
            obtainedItem = "Dragonwrath";
            materials[material] -= 250;
            break;
        }
    }

    let keyMaterials = {};
    keyMaterials.shards =  materials[`shards`];
    keyMaterials.fragments = materials[`fragments`];
    keyMaterials.motes = materials[`motes`];

    delete materials[`shards`];
    delete materials[`fragments`];
    delete materials[`motes`];

    let sortedKeyMaterials = Object.entries(keyMaterials).sort((a, b) => a[0].localeCompare(b[0])).sort((a, b) => b[1] - a[1]);

    let sortedKJunkMaterials = Object.entries(materials).sort((a, b) => a[0].localeCompare(b[0]));

    console.log(`${obtainedItem} obtained!`);

    for (let material of sortedKeyMaterials) {
        console.log(`${material[0]}: ${material[1]}`);
    }

    for (let material of sortedKJunkMaterials) {
        console.log(`${material[0]}: ${material[1]}`);
    }
}

/*
The possible items are:
"Shadowmourne" – requires 250 Shards
"Valanyr" – requires 250 Fragments
"Dragonwrath" – requires 250 Motes
"Shards", "Fragments", and "Motes" are the key materials, all else is junk. 

You will be given lines of input in the format: 
"{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}"

Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained. 
Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line. Finally, print the collected junk items, in alphabetical order.

Input
Each line comes in the following format:
{quantity1} {material1} {quantity2} {material2} … {quantityN} {materialN}

Output
On the first line, print the obtained item in format: "{Legendary item} obtained!"
On the next three lines, print the remaining key materials in descending order by quantity
If two key materials have the same quantity, print them in alphabetical order
On the final several lines, print the junk items in alphabetical order
All materials are printed in format "{material}: {quantity}"
All output should be lowercase, except the first letter of the legendary
*/


legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');
/*
Dragonwrath obtained!
shards: 22
motes: 19
fragments: 0
fangs: 9
silver: 123
*/

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
/*
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5
*/