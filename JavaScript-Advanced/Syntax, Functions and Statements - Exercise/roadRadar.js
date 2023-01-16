function roadRadar(speed, area) {
    let speedLimit;
    let difference;
    let speedingStatus;

    switch (area) {
        case "motorway": speedLimit = 130; break;
        case "interstate": speedLimit = 90; break;
        case "city": speedLimit = 50; break;
        case "residential": speedLimit = 20; break;
    }

    difference = speed - speedLimit;

    if (difference > 0 && difference <= 20) {
        speedingStatus = "speeding";
    } else if (difference > 20 && difference <= 40) {
        speedingStatus = "excessive speeding";
    } else if (difference > 40) {
        speedingStatus = "reckless driving";
    } 

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${speedingStatus}`);
    }
}

roadRadar(40, 'city');
//Driving 40 km/h in a 50 zone
roadRadar(21, 'residential');
//The speed is 1 km/h faster than the allowed speed of 20 - speeding
roadRadar(120, 'interstate');
//The speed is 30 km/h faster than the allowed speed of 90 - excessive speeding
roadRadar(200, 'motorway');
//The speed is 70 km/h faster than the allowed speed of 130 - reckless driving