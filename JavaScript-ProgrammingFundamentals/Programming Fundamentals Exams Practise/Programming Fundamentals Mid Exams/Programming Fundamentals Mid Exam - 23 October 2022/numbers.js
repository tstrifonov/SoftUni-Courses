function numbers(input) {
    let arrayNum = input.shift().split(" ");
    let command = input.shift();

    while (input.length > 0 && command != "Finish") {
        command = command.split(" ");

        switch (command[0]) {
            case "Add": 
                arrayNum.push(command[1]); 
                break;
            case "Remove": 
                if (arrayNum.indexOf(command[1]) != -1) {
                    arrayNum.splice(arrayNum.indexOf(command[1]), 1);
                } 
                break;
            case "Replace": 
                if (arrayNum.indexOf(command[1]) != -1) {
                    arrayNum.splice(arrayNum.indexOf(command[1]), 1, command[2]);
                } 
                break;
            case "Collapse": 
                let newArr = [];
                while (arrayNum.length > 0) {
                    let number = Number(arrayNum.shift());
                    if (number >= Number(command[1])) {
                        newArr.push(number);
                    }
                }
                arrayNum = newArr;
            
                break;
        }
        command = input.shift();
    }

    console.log(arrayNum.join(" "));
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbers(["1 20 -1 10", "Collapse 8", "Finish"]);
numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove","Finish"]);
