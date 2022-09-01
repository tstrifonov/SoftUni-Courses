function sumSeconds(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let resultTime = a + b + c;

    let minutes = Number(Math.floor(resultTime / 60));
    let seconds = Number((resultTime % 60));
    
   if (seconds < 10) {
    console.log(minutes + ":0"+ seconds);
   } else {
    console.log(minutes + ":"+ seconds);
   }
  
}

sumSeconds(["60", "22", "7"]);