function cars(input) {
  const library = {};
  const functionsObject = { create, inherit, set, print };

  for (let entry of input) {
    const [commandOne, commandTwo, commandThree, commandFour] =
      entry.split(" ");
    if (commandThree === "inherit") {
      functionsObject[commandThree](commandTwo, commandFour);
    } else {
      functionsObject[commandOne](commandTwo, commandThree, commandFour);
    }
  }

  function create(name) {
    //create <name> - creates an object with the supplied <name>
    library[name] = {};
  }
  function inherit(name, parentName) {
    // create <name> inherits <parentName> - creates an object with the given <name>,
    // that inherits from the parent object with the <parentName>
    let parentObj = Object.create(library[parentName]);
    library[name] = parentObj;
  }
  function set(name, key, value) {
    //set <name> <key> <value> - sets the property with key equal to <key> to <value> in the object with the supplied <name>.
    library[name][key] = value;
  }
  function print(name) {
    //print <name> - prints the object with the supplied <name> in the format "<key1>:<value1>,<key2>:<value2>…" -
    // the printing should also print all inherited properties from parent objects.
    // Inherited properties should come after own properties.
    let result = [];
    for (const key in library[name]) {
      result.push(`${key}:${library[name][key]}`);
    }
    console.log(result.join(","));
  }
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
/*
color:red
model:new,color:red
*/

console.log("-----------------");

cars([
  "create pesho",
  "create gosho inherit pesho",
  "create stamat inherit gosho",
  "set pesho rank number1",
  "set gosho nick goshko",
  "print stamat",
]);
/*
'nick:goshko,rank:number1\n'
*/
