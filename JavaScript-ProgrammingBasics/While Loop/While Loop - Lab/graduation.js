function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let gradeYearly = Number(input[index]);
    let schoolGrade = 0;
    let fMarks = 0;
    let averageGrade = Number(input[index]);

    while (fMarks < 2) {
        
        if (gradeYearly < 4) {
            fMarks++;
            if (fMarks > 1) {
                console.log(`${name} has been excluded at ${schoolGrade} grade`);
                break;
            }
        } 

            schoolGrade++;
            averageGrade = (averageGrade + gradeYearly) /2;
        
        
        if (schoolGrade === 12) {
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
        }

        index++;
        gradeYearly = Number(input[index]);
    }

}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);