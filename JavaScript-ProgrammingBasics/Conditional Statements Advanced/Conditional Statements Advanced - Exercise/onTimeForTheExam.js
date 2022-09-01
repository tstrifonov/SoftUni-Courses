function onTimeForTheExam(input) {
    let examTimeHour = Number(input[0]);
    let examTimeMinutes = Number(input[1]);
    let arrivalTimeHour = Number(input[2]);
    let arrivalTimeMinutes = Number(input[3]);

    let examHoursAndMinutes = (60 * examTimeHour) + examTimeMinutes;
    let arrivalHoursAndMinutes = (60 * arrivalTimeHour) + arrivalTimeMinutes;
    let differenceBetweenExamAndArrivalTime = examHoursAndMinutes - arrivalHoursAndMinutes;

    if ((examHoursAndMinutes >= arrivalHoursAndMinutes) && ((differenceBetweenExamAndArrivalTime >= 0) && (differenceBetweenExamAndArrivalTime) <= 30)) {
        console.log(`On time`);
    } else if ((examHoursAndMinutes > arrivalHoursAndMinutes) && (differenceBetweenExamAndArrivalTime > 30)) {
        console.log(`Early`);
    } else if (examHoursAndMinutes < arrivalHoursAndMinutes) {
        console.log(`Late`);
    }

    if (differenceBetweenExamAndArrivalTime > 0) {
        let hours = Math.floor((differenceBetweenExamAndArrivalTime / 60));
        let minutes = differenceBetweenExamAndArrivalTime % 60;

        if (differenceBetweenExamAndArrivalTime < 60) {
            console.log(`${minutes} minutes before the start`);
        } else if (hours >= 1 && minutes < 10) {
            console.log(`${hours}:0${minutes} hours before the start`);
        } else if (hours >= 1 && minutes >= 10 ) {
            console.log(`${hours}:${minutes} hours before the start`);
        }

    } else if (differenceBetweenExamAndArrivalTime < 0) {
        differenceBetweenExamAndArrivalTime = arrivalHoursAndMinutes - examHoursAndMinutes;
        let hours = Math.floor((differenceBetweenExamAndArrivalTime / 60));
        let minutes = differenceBetweenExamAndArrivalTime % 60;

        if (differenceBetweenExamAndArrivalTime < 60 ) {
            console.log(`${minutes} minutes after the start`);
        } else if (hours >= 1 && minutes < 10) {
            console.log(`${hours}:0${minutes} hours after the start`);
        } else if (hours >= 1 && minutes >= 10 ) {
            console.log(`${hours}:${minutes} hours after the start`);
        }

    }
    
}

onTimeForTheExam(["9", "00", "10", "30"]);