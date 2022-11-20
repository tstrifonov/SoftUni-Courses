function matchDates(input) {
    let filter = /\b(?<day>\d{2})(?<separator>[\/\.\-])(?<month>[A-Z][a-z]{2})\k<separator>(?<year>\d{4})\b/g;
    let dates = input.shift();

    while ((result = filter.exec(dates)) !== null) {
        console.log(`Day: ${result.groups['day']}, Month: ${result.groups['month']}, Year: ${result.groups['year']}`);
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);
/*
Day: 13, Month: Jul, Year: 1928
Day: 10, Month: Nov, Year: 1934
Day: 25, Month: Dec, Year: 1937
*/