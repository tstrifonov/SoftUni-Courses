function arrayManipulator(arrInt, arrCommands) {
    for (let i = 0; i < arrCommands.length; i++) {
        let arrElements = arrCommands[i].split(" ");
        let command = arrElements.shift();
        
        switch (command) {
            case "add": add(arrElements); break;
            case "addMany": addMany(arrElements); break;
            case "contains": contains(arrElements); break;
            case "remove": remove(arrElements); break;
            case "shift": shift(arrElements); break;
            case "sumPairs": sumPairs(arrInt); break;
            case "print": print(arrInt); break;
        }
        
    }

    //add <index> <element> – adds element at the specified index (elements right from this position inclusively are shifted to the right).
    function add(array) {
        let index = Number(array[0]);
        let element = Number(array[1]);

        arrInt.splice(index, 0, element);
    }

    //addMany <index><element 1> <element 2> … <element n> – adds a set of elements at the specified index.
    function addMany(array) {
        let index = Number(array.shift());
        let elements = array.slice();

        for (let i = 0; i < elements.length; i++) {
            arrInt.splice(index + i, 0, Number(elements[i]));
        }
    }
    
    //contains <element> – prints the index of the first occurrence of the specified element (if exists) in the array or -1 if the element is not found.
    function contains(array) {
        let element = Number(array[0]);

        console.log(arrInt.indexOf(element));
    }

    //remove <index> – removes the element at the specified index.
    function remove(array) {
        let index = Number(array[0]);

        arrInt.splice(index, 1);
    }

    //shift <positions> – shifts every element of the array the number of positions to the left (with rotation).
    //For example, [1, 2, 3, 4, 5] -> shift 2 -> [3, 4, 5, 1, 2]
    function shift(array) {
        let shiftSize = Number(array[0]);

        for (let u = 1; u <= shiftSize; u++) {
            arrInt.push(arrInt.shift());
        }
        
    }

    //sumPairs – sums the elements in the array by pairs (first + second, third + fourth, …).
    //For example, [1, 2, 4, 5, 6, 7, 8] -> [3, 9, 13, 8].
    function sumPairs(arrInt) {        
        for (let i = 0; i < arrInt.length; i++) {
            if (i + 1 == arrInt.length){
                break;
            } else {
            arrInt[i] = Number(arrInt[i]) + Number(arrInt[i + 1]);
            arrInt.splice(i + 1, 1);
            }
        }
    }

    //print – stop receiving more commands and print the last state of the array in the following format:
    // `[ {element1}, {element2}, …elementN} ]`
    // Note: The elements in the array must be joined by comma and space (, ).
    function print(arrInt) {
        console.log(`[ ${arrInt.join(", ")} ]`);
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
/*
0
-1
[ 1, 8, 2, 4, 5, 6, 7 ]
*/
arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);
/*
-1
[ 2, 3, 5, 9, 8, 7, 6, 5, 1 ]
*/

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"]);
/*
[ 6, 6, 6 ]
*/

arrayManipulator([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],["sumPairs", "sumPairs", "addMany 0 -1 -2 -3", "print"]);
/*
[ -1, -2, -3, 6, 6, 6 ]
*/

