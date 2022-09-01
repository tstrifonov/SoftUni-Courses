function walking(input) {
    let index = 0;
    let walkOrGoHome = input[index];
    let currentStepCount = Number(input[index]);
    let stepsToReachGoal = 10000;

    while (stepsToReachGoal > 0) {
       
        if (walkOrGoHome === "Going home") {
            index++;
            currentStepCount = Number(input[index]);
            stepsToReachGoal = stepsToReachGoal - currentStepCount;
            break;
        }

        currentStepCount = Number(input[index]);
        stepsToReachGoal = stepsToReachGoal- currentStepCount;
        index++;
        walkOrGoHome = input[index];
        
    }

    if (stepsToReachGoal <= 0 ) {
        console.log(`Goal reached! Good job!`);
        stepsToReachGoal = (stepsToReachGoal) * (-1);
        console.log(`${stepsToReachGoal} steps over the goal!`);
    } else if (stepsToReachGoal > 0) {
        console.log(`${stepsToReachGoal} more steps to reach goal.`);
    }

}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
