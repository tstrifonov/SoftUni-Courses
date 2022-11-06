function schoolGrades(input) {
    let studentGrades = {};

    for (let entry of input) {
        entry = entry.split(" ");
        let name = entry.shift();
        let grades = entry.join(" ");

        if (studentGrades[name]) {
            grades += " " + studentGrades[name];
        } 

        studentGrades[name] = grades;
    }
 
    for (let entry in studentGrades) {
        let grades = studentGrades[entry].split(" ");
        let averageGrade = 0;
        for (let grade of grades) {
            averageGrade += Number(grade);
        }
        averageGrade = averageGrade / grades.length;
        studentGrades[entry] = averageGrade.toFixed(2);
    }

    let sortedGradesArr = Object.entries(studentGrades);
    sortedGradesArr.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

    for (let entry of sortedGradesArr) {
        console.log(`${entry[0]}: ${entry[1]}`);
    }
}

schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']);
/*
George: 5.00
Steven: 4.50
Tammy: 3.33
*/