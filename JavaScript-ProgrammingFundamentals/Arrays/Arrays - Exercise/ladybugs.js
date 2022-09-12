function ladybugs(input) {
    let fieldSize = input[0];
    let ladybugsIndexes = input[1];

    //the following lines create an array with fieldSize length and fills it with bugs
  
    let arr = [];
    for (let i = 0; i < fieldSize; i++) {
        arr[i] = "EMPTY";
    }
   
    let currBugIndex = "";
    for (let i = 0; i < ladybugsIndexes.length; i++) {
        if (ladybugsIndexes[i] != " " && i + 1 == ladybugsIndexes.length) {
            currBugIndex += ladybugsIndexes[i];
            if (Number(currBugIndex) < 0 || Number(currBugIndex) >= fieldSize) {
                continue;
            }
            arr[Number(currBugIndex)] = "BUG";
        }
        else if (ladybugsIndexes[i] != " ") {
            currBugIndex += ladybugsIndexes[i];
        } else if (ladybugsIndexes[i] == " ") {
            if (Number(currBugIndex) < 0 || Number(currBugIndex) >= fieldSize) {
                continue;
            }
            arr[Number(currBugIndex)] = "BUG";
            currBugIndex = "";
        }
    }
    
    //console.log(arr);
   

    for (let y = 2; y < input.length; y++) {
        let currCommand = input[y];
        
        let bugIn = "";
        let index = 0;
        do {
            bugIn += currCommand[index];
            index++;
        } while (currCommand[index] != " ");
        bugIn = Number(bugIn);
        index++;

        let direction = currCommand[index];
        if (direction === "r") {
            index = index + 6;
        } else if (direction === "l") {
            index = index + 5;
        }

        let flyLength = "";
        do {
            flyLength += currCommand[index];
            index++;
        } while (currCommand[index] != undefined);
        flyLength = Number(flyLength);
        
        if (flyLength < 0 && direction === "r") {
            direction = "l";
            flyLength = flyLength * (-1);
        } else if (flyLength < 0 && direction === "l") {
            direction = "r";
            flyLength = flyLength * (-1);
        }

        //от тук вече започва да се движи калинката

        if (direction === "r") {
            arr[bugIn] = "EMPTY";
            let newFlyLength = flyLength;
            while (arr[bugIn + newFlyLength] == "BUG") {
                newFlyLength += flyLength;
                if (arr[bugIn + newFlyLength] == undefined) {
                    break;
                }
            }
            if (arr[bugIn + newFlyLength] != undefined) {
                arr[bugIn + newFlyLength] = "BUG";
            }
        } else if (direction === "l") {
            arr[bugIn] = "EMPTY";
            let newFlyLength = flyLength;
            while (arr[bugIn - newFlyLength] == "BUG") {
                newFlyLength += flyLength;
                if (arr[bugIn - newFlyLength] == undefined) {
                    break;
                }
            }
            if (arr[bugIn - newFlyLength] != undefined) {
                arr[bugIn - newFlyLength] = "BUG";
            }
        }

    }

    let finalPrint = "";
    for (let x = 0; x < arr.length; x++) {
        if (arr[x] == "BUG") {
           finalPrint += " 1";
        } else if (arr[x] == "EMPTY") {
            finalPrint += " 0";
        }
    }

    console.log(finalPrint);


}

ladybugs([ 3, '0 1', '0 right -1', '2 right 1' ]); // 0 1 0
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']); // 0 0 0
ladybugs([ 5, '3', '3 left 2', '1 left -2']); // 0 0 0 1 0