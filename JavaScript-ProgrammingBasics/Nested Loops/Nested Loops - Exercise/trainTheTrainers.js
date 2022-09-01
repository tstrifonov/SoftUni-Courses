function trainTheTrainers(input) {
    let index = 0;
    let judgesNumber = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;
    let command = input[index];
    let finalAverage = 0;
    let presentationNumber = 0;

    while (command != "Finish") {
        let presentationAverage = 0;
        for (let i = 1; i <= judgesNumber; i++) {
        let singleJudgeScore = Number(input[index]);
        index++;
        presentationAverage = presentationAverage + singleJudgeScore;
      }
      presentationAverage = presentationAverage / judgesNumber;
      finalAverage = finalAverage + presentationAverage;
      console.log(`${presentationName} - ${presentationAverage.toFixed(2)}.`);
      presentationNumber++;
      command = input[index];
      presentationName = input[index];
      index++;
    }

    finalAverage = finalAverage / presentationNumber;

    console.log(`Student's final assessment is ${finalAverage.toFixed(2)}.`);
}

trainTheTrainers(["3", "Arrays", "4.53", "5.23", "5.00", "Lists", "5.83", "6.00", "5.42", "Finish"]);