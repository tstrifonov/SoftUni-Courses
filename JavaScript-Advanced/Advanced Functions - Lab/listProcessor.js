function listProcessor(input) {
  let result = [];
  const objectFunctions = { add, remove, print };

  for (let entry of input) {
    const [command, text] = entry.split(" ");
    objectFunctions[command](text);
  }

  function add(string) {
    result.push(string);
  }

  function remove(string) {
    while (result.includes(string)) {
      result.splice(result.indexOf(string), 1);
    }
  }

  function print() {
    console.log(result.join(","));
  }
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
//again,again

listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
//pesho,george
