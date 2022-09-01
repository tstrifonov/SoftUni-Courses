function cinemaTickets(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let seats = Number(input[index]);
    index++;

    let studentTotal = 0;
    let standartTotal = 0;
    let kidTotal = 0;
    

    while (movie != "Finish") {
        
        let student = 0;
        let standart = 0;
        let kid = 0;

        while (seats > student + standart + kid) {
            let ticket = input[index];
            index++;

            if (ticket === "End") {
                break;
            }

            switch (ticket) {
                case "student": student++; break;
                case "standard": standart++; break;
                case "kid": kid++; break;
            }
    
        }

        console.log(`${movie} - ${((student + standart + kid) / seats * 100).toFixed(2)}% full.`);
        movie = input[index];
        index++;
        seats = Number(input[index]);
        index++;

        studentTotal = studentTotal + student;
        standartTotal = standartTotal + standart;
        kidTotal = kidTotal + kid;

    }

    console.log(`Total tickets: ${studentTotal + standartTotal + kidTotal}`);
    console.log(`${(studentTotal / (standartTotal + studentTotal + kidTotal) * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartTotal / (standartTotal + studentTotal + kidTotal) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTotal / (standartTotal + studentTotal + kidTotal) * 100).toFixed(2)}% kids tickets.`);

}

cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);