function cityTaxes(name, population, treasury) {
  const cityObject = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += Math.floor(this.population * this.taxRate);
    },
    applyGrowth(percentage) {
      this.population += Math.floor((percentage / 100) * this.population);
    },
    applyRecession(percentage) {
      this.treasury -= Math.floor((percentage / 100) * this.treasury);
    },
  };

  return cityObject;
}

const city1 = cityTaxes("Tortuga", 7000, 15000);
console.log(city1);
/*
{
  name: 'Tortuga',
  population: 7000,
  treasury: 15000,
  taxRate: 10,
  collectTaxes: [Function: collectTaxes],
  applyGrowth: [Function: applyGrowth],
  applyRecession: [Function: applyRecession]
}
*/

const city2 = cityTaxes("Tortuga", 7000, 15000);
city2.collectTaxes();
console.log(city2.treasury);
city2.applyGrowth(5);
console.log(city2.population);
/*
85000
7350
*/
