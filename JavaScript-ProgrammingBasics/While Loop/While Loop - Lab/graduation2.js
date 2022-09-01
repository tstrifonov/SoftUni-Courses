function graduation2(input) {
    let index = 0;
    let name = input[index];
    index++;
    let yearGrade = Number(input[index]);
    let sum = 0;
    let averageGrade = 0;
    let schoolClass = 1;
    let fMarks = 0;

    while (fMarks <= 1) {
        yearGrade = Number(input[index]);
        sum = sum + yearGrade
        averageGrade = sum / index;
        
        if (yearGrade >= 4) {
            schoolClass++;
        } else if (yearGrade < 4) {
            fMarks++;
        }
        

        if (fMarks > 1) {
            console.log(`${name} has been excluded at ${schoolClass} grade`);
            break;
        }
        

        if (schoolClass > 12) {
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
            break;
        }
    

        index++;
    }
}

graduation2(["Gosho", "5", "5.5", "6", "5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"]);