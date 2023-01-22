function cityRecord(name, population, treasury) {
  const cityObject = {
    name,
    population,
    treasury,
  };
  return cityObject;
}

console.log(cityRecord("Tortuga", 7000, 15000));
/*
{
  name: 'Tortuga',
  population: 7000,
  treasury: 15000
}
*/

console.log(cityRecord("Santo Domingo", 12000, 23500));
/*
{
  name: 'Santo Domingo',
  population: 12000,
  treasury: 23500
}
*/
