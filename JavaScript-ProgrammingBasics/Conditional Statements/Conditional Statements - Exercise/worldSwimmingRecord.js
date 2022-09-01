function worldSwimmingRecord(input) {
    let currentRecord = Number(input[0]);
    let distance = Number(input[1]);
    let ivanSpeed = Number(input[2]);
    
    let waterDrag = Number(Math.floor(distance / 15));
    let ivanRecord = Number((distance * ivanSpeed) + (waterDrag * 12.5));
    let secondsNeeded = 0;

    if (ivanRecord < currentRecord) {
        console.log(`Yes, he succeeded! The new world record is ${ivanRecord.toFixed(2)} seconds.`);
    } else if ( ivanRecord >= currentRecord) {
        secondsNeeded = Number(ivanRecord - currentRecord);
        console.log(`No, he failed! He was ${secondsNeeded.toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord(["10464", "1500", "20"]);
