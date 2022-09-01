function nextDay(year, month, day) {
    let currentDay = new Date(year, month-1, day);
   
    //console.log(currentDay);

    currentDay.setDate(currentDay.getDate() + 1);

    //console.log(currentDay);
    
    console.log(`${currentDay.getFullYear()}-${currentDay.getMonth()+1}-${currentDay.getDate()}`);
}

nextDay(2016, 9, 30);

/*
Write a JS function that calculates the date of the next day by given year, month, and day.
The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.
The output should be returned as a result of your function.
*/