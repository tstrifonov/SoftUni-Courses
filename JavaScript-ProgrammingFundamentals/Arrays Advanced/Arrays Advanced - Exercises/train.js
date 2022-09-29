function train(arr) {
    let wagons = arr.shift().split(" ");
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let commands = arr[i].split(" ")[0];
        let passengers = arr[i].split(" ")[1];

        if (commands == "Add") {
            wagons.push(passengers);

        } else {

            for (let u = 0; u < wagons.length; u++) {
                if (Number(wagons[u]) + Number(commands) <= maxCapacity) {
                    wagons[u] = Number(wagons[u]) + Number(commands);
                    break;
                }
            }

        }
    }

    console.log(wagons.join(" "));

}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']); //72 54 21 12 4 75 23 10 0
train(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']); //10 10 10 10 10 10 10

/*
You will be given an array of strings.
The first element will be a string containing wagons (numbers). Each number inside the string represents the number of passengers that are currently in a wagon. 
The second element in the array will be the max capacity of each wagon (single number).

The rest of the elements will be commands in the following format:
⦁	Add {passengers} – add a wagon to the end with the given number of passengers.
⦁	{passengers} - find an existing wagon to fit all the passengers (starting from the first wagon)
At the end, print the final state of the train (all the wagons separated by a space).
*/