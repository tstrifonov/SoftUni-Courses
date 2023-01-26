function solve() {
  function mage(name) {
    let state = {
      name: name,
      health: 100,
      mana: 100,
    };

    return Object.assign(state, canCast(state));
  }

  function fighter(name) {
    let state = {
      name: name,
      health: 100,
      stamina: 100,
    };

    return Object.assign(state, canFight(state));
  }

  function canCast(state) {
    return {
      cast(spell) {
        console.log(`${state.name} cast ${spell}`);
        state.mana--;
      },
    };
  }

  function canFight(state) {
    return {
      fight() {
        console.log(`${state.name} slashes at the foe!`);
        state.stamina--;
      },
    };
  }

  return { mage: mage, fighter: fighter };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball");
scorcher.cast("thunder");
scorcher.cast("light");

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();

console.log(scorcher2.stamina);
console.log(scorcher.mana);

/*
Scorcher cast fireball
Scorcher cast thunder
Scorcher cast light
Scorcher 2 slashes at the foe!
99
97
*/

console.log("-------------------");

// let create = result();
// const scorcher2 = create.fighter("Scorcher 2");
// scorcher2.fight();
// let act = scorcher2.stamina;
// let exp = 99;
// assert.equal(act, exp, "2");
