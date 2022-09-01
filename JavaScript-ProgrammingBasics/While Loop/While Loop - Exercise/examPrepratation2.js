function examPrepratation2(input) {
let index = 0;
let fMarksMax = Number(input[index]);
index++;
let fMarksCurrent = 0;
let currentTaskName = input[index];
index++;
let lastTaskName = "";
let currentMark = Number(input[index]);
let averageMark = 0;
let tasksSolved = 0;
let markSum = 0;

while (currentTaskName !== "Enough") {
    if (fMarksMax === fMarksCurrent) {
        break;
    }
    
    if (currentMark <= 4) {
        fMarksCurrent++;
    }

    tasksSolved++;
    markSum = markSum + currentMark;
    lastTaskName = currentTaskName;

    index++;
    currentTaskName = input[index];
    index++;
    currentMark = Number(input[index]);
}

if (fMarksCurrent >= fMarksMax) {
    console.log(`You need a break, ${fMarksCurrent} poor grades.`);
} else if (currentTaskName === "Enough") {
    averageMark = markSum / tasksSolved;
    console.log(`Average score: ${averageMark.toFixed(2)}`);
    console.log(`Number of problems: ${tasksSolved}`);
    console.log(`Last problem: ${lastTaskName}`);
}

}

examPrepratation2(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);