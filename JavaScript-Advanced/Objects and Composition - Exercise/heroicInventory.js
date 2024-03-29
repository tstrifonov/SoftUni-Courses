function heroicInventory(input) {
  let allHeroes = [];

  for (let i = 0; i < input.length; i++) {
    let [name, level, items] = input[i].split(" / ");
    level = Number(level);
    items = items ? items.split(", ") : [];
    allHeroes.push({ name, level, items });
  }

  //console.log(JSON.stringify(allHeroes));
  return JSON.stringify(allHeroes);
}

heroicInventory([
  "Isacc / 25 ",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
//[{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]

heroicInventory(["Jake / 1000 / Gauss, HolidayGrenade"]);
//[{"name":"Jake","level":1000,"items":["Gauss","HolidayGrenade"]}]
