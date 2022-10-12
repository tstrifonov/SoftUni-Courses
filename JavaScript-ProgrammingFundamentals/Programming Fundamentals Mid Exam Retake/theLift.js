function theLift(input) {
    let people = Number(input[0]);
    let wagons = input[1].split(" ");


    for (let i = 0; i < wagons.length; i++) {
        while (Number(wagons[i]) < 4 && people > 0) {
            people--;
            wagons[i] = Number(wagons[i]) + 1;
        }
    }

    if (people == 0 && wagons[wagons.length - 1] < 4) {
        console.log("The lift has empty spots!");
        console.log(wagons.join(" "));
    } else if (people > 0 && wagons[wagons.length - 1] == 4) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(wagons.join(" "));
    } else if (people == 0 && wagons[wagons.length - 1] == 4) {
        console.log(wagons.join(" "));
    }
}

/*
If there are no more people and the lift have empty spots, you should print:
"The lift has empty spots!
{wagons separated by ' '}"
If there are still people in the queue and no more available space, you should print:
"There isn't enough space! {people} people in a queue!
{wagons separated by ' '}"
If the lift is full and there are no more people in the queue, you should print only the wagons separated by " "
*/

theLift(["15", "0 0 0 0 0"]);
/*
The lift has empty spaces!
4 4 4 3 0
*/
theLift(["20", "0 2 0"]);
/*
There isn't enough space! 10 people in a queue!
4 4 4
*/