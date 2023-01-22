function townPopulation(input) {
  const towns = {};

  for (let entry of input) {
    const [town, population] = entry.split(" <-> ");

    if (towns.hasOwnProperty(town) == false) {
      towns[town] = 0;
    }
    towns[town] += Number(population);
  }

  for (let town in towns) {
    console.log(`${town} : ${towns[town]}`);
  }
}

townPopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
/*
Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000
*/

townPopulation([
  "Istanbul <-> 100000",
  "Honk Kong <-> 2100004",
  "Jerusalem <-> 2352344",
  "Mexico City <-> 23401925",
  "Istanbul <-> 1000",
]);
/*
Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925
*/
