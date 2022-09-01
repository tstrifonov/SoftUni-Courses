function vacationBooksList(input) {
    let pageCount = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let days = Number(input[2]);

    let hoursPerBook = pageCount / pagePerHour;
    let daysPerBook = (hoursPerBook / days).toFixed(1);

    console.log (daysPerBook);
}

vacationBooksList(["500", "25", "3"]);