function addAndRemove(arr) {
    let newArr = [];
    let n = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "add") {
            newArr.push(n);
        } else if (arr[i] == "remove") {
            newArr.pop();
        }
        n++;
    }

    if (newArr[0] == undefined) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "));
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
