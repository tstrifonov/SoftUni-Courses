function addAndRemoveElements(arr) {
  let array = [];
  let number = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "add") {
      array.push(number);
    } else if (arr[i] == "remove") {
      array.pop();
    }
    number++;
  }

  if (array.length == 0) {
    return "Empty";
  } else {
    return array.join("\n");
  }
}

console.log(addAndRemoveElements(["add", "add", "add", "add"]));
/*
1
2
3
4
*/

console.log(addAndRemoveElements(["add", "add", "remove", "add", "add"]));
/*
1
4
5
*/
