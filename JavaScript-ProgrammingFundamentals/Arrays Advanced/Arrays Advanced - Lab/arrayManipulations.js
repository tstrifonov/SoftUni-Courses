function arrayManipulations(input) {
    let arr = input.shift().split(" ");
    
    for (let i = 0; i < input.length; i++) {
        let numbers = input[i].split(" ");
        let command = numbers.shift();

        switch (command) {
            case "Add": add(arr, numbers[0]); break;
            case "Remove": remove(arr, numbers[0]); break;
            case "RemoveAt": removeAt(arr, numbers[0]); break;
            case "Insert": insert(arr, numbers[0], numbers[1]); break;
        }

    }

    console.log(arr.join(" "));
    
    function add(array, num) {
        array.push(num);
    }

    function remove(array, num) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == num) {
                array.splice(i, 1);
            }
        }
    }

    function removeAt(array, num) {
        array.splice(num, 1);
    }

    function insert(array, num, index) {
        array.splice(index, 0, num)
    }
}

arrayManipulations(['4 19 2 53 6 43','Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']); //4 53 6 8 43 3

/*
Write a function that manipulates an array of numbers. 
⦁	Add {number}: add a number to the end of the array
⦁	Remove {number}: remove all occurrences of a particular number from the array
⦁	RemoveAt {index}: removes number at a given index
⦁	Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!
The input comes as an array of strings. The first element will be a string containing the array to manipulate. Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.
*/