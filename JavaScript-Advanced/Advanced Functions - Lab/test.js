function test() {
  let objectA = {
    one: 1,
    two: 2,
  };

  let objectB = Object.create(objectA);
  objectB.three = 3;

  let result = [];
  for (const key in objectB) {
    result.push(`${key}:${objectB[key]}`);
  }
  console.log(result.join(","));
}

test();
