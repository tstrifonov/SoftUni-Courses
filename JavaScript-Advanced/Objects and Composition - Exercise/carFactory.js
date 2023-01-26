function carFactory(objectRequirements) {
  const currentInventory = {
    engine: {
      "Small engine": { power: 90, volume: 1800 },
      "Normal engine": { power: 120, volume: 2400 },
      "Monster engine": { power: 200, volume: 3500 },
    },
    carriage: {
      hatchback: { type: "hatchback", color: "<as required>" },
      coupe: { type: "coupe", color: "<as required>" },
    },
  };

  let newCar = {};

  //model
  newCar.model = objectRequirements.model;

  //engine
  if (objectRequirements.power <= 90) {
    newCar.engine = currentInventory.engine["Small engine"];
  } else if (objectRequirements.power > 90 && objectRequirements.power <= 120) {
    newCar.engine = currentInventory.engine["Normal engine"];
  } else if (
    objectRequirements.power > 120 &&
    objectRequirements.power <= 200
  ) {
    newCar.engine = currentInventory.engine["Monster engine"];
  }

  //carriage
  newCar.carriage = currentInventory.carriage[objectRequirements.carriage];
  newCar.carriage.color = objectRequirements.color;

  //wheels
  let wheels = objectRequirements.wheelsize;
  if (wheels % 2 == 0) {
    wheels -= 1;
  }
  newCar.wheels = [wheels, wheels, wheels, wheels];

  return newCar;
}

carFactory({
  model: "VW Golf II",
  power: 90,
  color: "blue",
  carriage: "hatchback",
  wheelsize: 14,
});
/*
{ model: 'VW Golf II',
  engine: { power: 90,
            volume: 1800 },
  carriage: { type: 'hatchback',
              color: 'blue' },
  wheels: [13, 13, 13, 13] }
*/

carFactory({
  model: "Opel Vectra",
  power: 110,
  color: "grey",
  carriage: "coupe",
  wheelsize: 17,
});
/*
{ model: 'Opel Vectra',
  engine: { power: 120,
            volume: 2400 },
  carriage: { type: 'coupe',
              color: 'grey' },
  wheels: [17, 17, 17, 17] }
*/
