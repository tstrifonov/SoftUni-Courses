function piccolo(input) {
    let parkingLot = {};
    let carsCounter = 0;

    for (let carEntry of input) {
        let [direction, carNumber] = carEntry.split(", ");

        if(direction == "IN") {
            parkingLot[carNumber] = "Inside";
            carsCounter++;
        } else if (direction == "OUT" && parkingLot.hasOwnProperty(carNumber)) {
            delete parkingLot[carNumber];
            carsCounter--;
        }
    }

    let sortedParking = Object.entries(parkingLot).sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    if (carsCounter == 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let car of sortedParking) {
            console.log(car[0]);
        }
    }
}

/*
Write a function that:
Records a car number for every car that enters the parking lot
Removes a car number when the car goes out
Input will be an array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number.
If the parking lot is empty, print: "Parking Lot is Empty".
*/

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);
/*
CA2822UU
CA2844AA
CA9876HH
CA9999TT
*/