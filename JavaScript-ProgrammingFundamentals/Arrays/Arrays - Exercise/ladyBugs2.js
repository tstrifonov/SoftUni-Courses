function ladybugs(array) {
    let workingArray = array.slice();
    //console.log(workingArray);
    let fieldSize = workingArray.shift();
    //console.log(fieldSize);
    let bugsPosition = workingArray.shift().split(' ');
    //console.log(bugsPosition);
    let finalBugsArray = [];
    for (let i = 0; i < fieldSize; i++) {
        finalBugsArray[i] = "EMPTY";
    }
    //console.log(finalBugsArray);

    
    for (let i = 0; i < bugsPosition.length; i++) {
        if (bugsPosition[i] > 0 && bugsPosition[i] < fieldSize) {
            finalBugsArray[bugsPosition[i]] = "BUG";
        }
    }
    //console.log(finalBugsArray);



  
    for (let i = 0; i < workingArray.length; i++) {
      let [ladybugIndex, command, jumpLength] = workingArray[i].split(' ');
  
      ladybugIndex = Number(ladybugIndex);
  
      if (ladybugIndex < 0 || ladybugIndex >= finalBugsArray.length || finalBugsArray[ladybugIndex] !== "BUG") {
        continue;
      }
  
      finalBugsArray[ladybugIndex] = "EMPTY";
  
      jumpLength = Number(jumpLength);
      
      if (command === 'left') {
        jumpLength = -jumpLength;
      }
  
      ladybugIndex += jumpLength;
      while (ladybugIndex >= 0 && ladybugIndex < finalBugsArray.length) {
        if (finalBugsArray[ladybugIndex] === "EMPTY") {
          finalBugsArray[ladybugIndex] = "BUG";
          break;
        }
        ladybugIndex += jumpLength;
      }
    }
  
    let finalPrint = "";
    for (let i = 0; i < finalBugsArray.length; i++) {
        if (finalBugsArray[i] == "BUG") {
            finalPrint += " 1";
        } else if (finalBugsArray[i] == "EMPTY") {
            finalPrint += " 0";
        }
    }

    console.log(finalPrint);
}

ladybugs([ 3, '0 1', '0 right -1', '2 right 1' ]); // 0 1 0
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']); // 0 0 0
ladybugs([ 5, '3', '3 left 2', '1 left -2']); // 0 0 0 1 0