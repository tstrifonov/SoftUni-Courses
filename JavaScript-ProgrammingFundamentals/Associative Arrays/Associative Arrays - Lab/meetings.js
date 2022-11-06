function meetings(input) {
    let scheduledMeetings = {};

    for (let entry of input) {
        let [day, name] = entry.split(" ");
        if (scheduledMeetings[day]) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            scheduledMeetings[day] = name;
        }
    }

    for (let kvp of Object.entries(scheduledMeetings)) {
        let [day, name] = kvp;
        console.log(`${day} -> ${name}`)
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);
/*
Scheduled for Monday
Scheduled for Wednesday
Conflict on Monday!
Scheduled for Friday
Monday -> Peter
Wednesday -> Bill
Friday -> Tim
*/