function minerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i++) {
        let resource = input[i];
        i++;
        let quantity = Number(input[i]);

        if (!resources.hasOwnProperty(resource)) {
            resources[resource] = 0;
        }

        resources[resource] += quantity;
    }

    for (let resource in resources) {
        console.log(`${resource} -> ${resources[resource]}`);
    }
}

/*
You are given an array of strings. Every odd string is representing a resource (e.g. Gold, Silver, Copper, and so on), 
and every even – quantity. Your task is to collect the resources and print them each on a new line. 
Print the resources and their quantities in the format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000].
*/

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]);
/*
Gold -> 155
Silver -> 10
Copper -> 17
*/