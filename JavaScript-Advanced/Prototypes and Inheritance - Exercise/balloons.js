/*
You have been tasked to create several classes for balloons.
Implement a class Balloon, which is initialized with a color (String) and gasWeight (Number). 
These two arguments should be public members.
Implement another class PartyBalloon, which inherits the Balloon class and is initialized with 2 additional parameters 
- ribbonColor (String) and ribbonLength (Number).
The PartyBalloon class should have a property ribbon, which is an object with color and length 
- the ones given upon initialization. The ribbon property should have a getter.
Implement another class BirthdayBalloon, which inherits the PartyBalloon class and is initialized 
with 1 extra parameter - text (String). The text should be a property and should have a getter.
*/

function result() {
  class Balloon {
    constructor(color, gasWeight) {
      this.color = color;
      this.gasWeight = gasWeight;
    }
  }

  class PartyBalloon extends Balloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength) {
      super(color, gasWeight);
      this.ribbon = {
        color: ribbonColor,
        length: ribbonLength,
      };
    }

    get ribbon() {
      return this.ribbon;
    }
  }

  class BirthdayBalloon extends PartyBalloon {
    constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
      super(color, gasWeight, ribbonColor, ribbonLength);
      this.text = text;
    }

    get text() {
      return this.text;
    }
  }

  return {
    Balloon,
    PartyBalloon,
    BirthdayBalloon,
  };
}

let classes = result();
let testBalloon = new classes.Balloon("yellow", 20.5);
console.log(testBalloon);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
console.log(testPartyBalloon);
let ribbon = testPartyBalloon.ribbon;
console.log(ribbon);

/*
Balloon {color: 'yellow', gasWeight: 20.5}

PartyBalloon {color: 'yellow', gasWeight: 20.5, _ribbon: {color: 'red', length: 10.25}}

{color: 'red', length: 10.25}
*/
