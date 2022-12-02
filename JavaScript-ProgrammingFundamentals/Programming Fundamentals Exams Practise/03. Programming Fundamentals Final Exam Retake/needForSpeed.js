function needForSpeed(input) {
    //create a library for all cars including car, mileage and fuel
    let n = Number(input.shift());
    let parking = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        parking[car] = {};
        parking[car].mileage = Number(mileage);
        parking[car].fuel = Number(fuel);
    }

    //follow commands about cars
    let command = input.shift();
    while (command != "Stop") {
        command = command.split(" : ");
        let instruction = command.shift();
        let carType = command.shift();

        switch (instruction) {

            case "Drive": 
                let distanceDriven = Number(command.shift());
                let fuelNeeded = Number(command.shift());

                if (parking[carType].fuel < fuelNeeded) {
                    console.log("Not enough fuel to make that ride");
                } else {
                    parking[carType].fuel -= fuelNeeded;
                    parking[carType].mileage += distanceDriven;
                    console.log(`${carType} driven for ${distanceDriven} kilometers. ${fuelNeeded} liters of fuel consumed.`);
                }

                if (parking[carType].mileage >= 100000) {
                    console.log(`Time to sell the ${carType}!`);
                    delete parking[carType];
                }
            break;

            case "Refuel":
                let fuelPumped = Number(command.shift());

                if (parking[carType].fuel + fuelPumped > 75) {
                    fuelPumped = 75 - parking[carType].fuel;
                }

                parking[carType].fuel += fuelPumped;
                console.log(`${carType} refueled with ${fuelPumped} liters`);
            break;

            case "Revert":
                let kilometersDecreased = Number(command.shift());

                if (parking[carType].mileage - kilometersDecreased < 10000) {
                    parking[carType].mileage = 10000;
                } else {
                    parking[carType].mileage -= kilometersDecreased;
                    console.log(`${carType} mileage decreased by ${kilometersDecreased} kilometers`);
                }
            break;
        }

        command = input.shift();
    }

    //print the whole car parking
    let parkingArr = Object.entries(parking);
    //parkingArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let i = 0; i < parkingArr.length; i++) {
        let car = parkingArr[i][0];
        console.log(`${car} -> Mileage: ${parking[car].mileage} kms, Fuel in the tank: ${parking[car].fuel} lt.`)
    }
}

needForSpeed(['4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop']);

/*
Not enough fuel to make that ride
Aston Martin Valkryie driven for 99 kilometers. 23 liters of fuel consumed.
Aston Martin Valkryie driven for 2 kilometers. 1 liters of fuel consumed.
Time to sell the Aston Martin Valkryie!
Lamborghini Veneno refueled with 1 liters
Bugatti Veyron mileage decreased by 2000 kilometers
Lamborghini Veneno -> Mileage: 11111 kms, Fuel in the tank: 75 lt.
Bugatti Veyron -> Mileage: 10345 kms, Fuel in the tank: 67 lt.
Koenigsegg CCXR -> Mileage: 67890 kms, Fuel in the tank: 12 lt.
*/


