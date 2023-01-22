function factory(libraryObject, ordersArray) {
  let finalProducts = [];
  for (let orderNum = 0; orderNum < ordersArray.length; orderNum++) {
    let newObject = ordersArray[orderNum].template;
    let newObjectParts = ordersArray[orderNum].parts;
    for (let part of newObjectParts) {
      newObject[part] = libraryObject[part];
    }
    finalProducts.push(newObject);
  }

  return finalProducts;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: "ACME Printer" },
    parts: ["print"],
  },
  {
    template: { name: "Initech Scanner" },
    parts: ["scan"],
  },
  {
    template: { name: "ComTron Copier" },
    parts: ["scan", "print"],
  },
  {
    template: { name: "BoomBox Stereo" },
    parts: ["play"],
  },
];

const products = factory(library, orders);
console.log(products);
console.log("stopper");

/*
[
  {
    name: 'ACME Printer',
    print: [Function: print]
  },
  {
    name: 'Initech Scanner',
    scan: [Function: scan]
  },
  {
    name: 'ComTron Copier',
    scan: [Function: scan],
    print: [Function: print]
  },
  {
    name: 'BoomBox Stereo',
    play: [Function: play]
  }
]
*/
