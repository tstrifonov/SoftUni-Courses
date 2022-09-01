function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]) + 15;

    if (minutes >= 60) {
        hour = (hour + 1) % 24;

        if (minutes <= 69) {
            minutes = minutes - 60;
            console.log(`${hour}:0${minutes}`);
        } else {
            minutes = minutes - 60;
            console.log(`${hour}:${minutes}`);
        }
    } else {
        console.log(`${hour}:${minutes}`);
    }

}

timePlus15Minutes(["0", "59"]);