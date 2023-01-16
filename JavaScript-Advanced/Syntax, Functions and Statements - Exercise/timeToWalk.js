function timeToWalk(stepsCount, footpringLength, studentSpeed) {
  const distance = stepsCount * footpringLength;
  const breakTime = Math.floor(distance / 500) * 60; //в секунди
  const metersPerSecond = (studentSpeed * 1000) / 3600;
  const walkingTime = distance / metersPerSecond;
  const totalTimeInSeconds = breakTime + walkingTime;
  const hours = Math.floor(totalTimeInSeconds / 3600);
  const minutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const seconds = Math.ceil((totalTimeInSeconds % 3600) % 60);

  console.log(`${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`);
}

timeToWalk(4000, 0.6, 5);
//00:32:48
timeToWalk(2564, 0.7, 5.5);
//00:22:35

/*
Write a function that calculates how long it takes a student to get to university. 
The function takes three numbers:
⦁	The first is the number of steps the student takes from their home to the university
⦁	Тhe second number is the length of the student's footprint in meters
⦁	Тhe third number is the student speed in km/h
Every 500 meters the student rests and takes a 1-minute break.
Calculate how long the student walks from home to university and print on the console the result in the following format: `hours:minutes:seconds`.
The input comes as three numbers.
The output should be printed on the console.
*/
