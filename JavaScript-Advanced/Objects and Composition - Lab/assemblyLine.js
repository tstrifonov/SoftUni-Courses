const assemblyLine = createAssemblyLine();

const myCar = {
  make: "Toyota",
  model: "Avensis",
};

//first Input
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);
//21
//20

//second Input
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
  name: "Never Gonna Give You Up",
  artist: "Rick Astley",
};
myCar.nowPlaying();
//Now playing 'Never Gonna Give You Up' by Rick Astley

//third Input
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
// Beep!
// Beep! Beep!

//forth Input
console.log(myCar);
// {
//   make: 'Toyota',
//   model: 'Avensis',
//   temp: 20,
//   tempSettings: 18,
//   adjustTemp: [Function],
//   currentTrack: {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
//   },
//   nowPlaying: [Function],
//   checkDistance: [Function]
// }

function createAssemblyLine(carObject) {
  let decoratorObject = {
    hasClima(passedObject) {
      passedObject.temp = 21;
      passedObject.tempSettings = 21;
      passedObject.adjustTemp = function () {
        if (this.temp < this.tempSettings) {
          this.temp += 1;
        } else if (this.temp > this.tempSettings) {
          this.temp -= 1;
        }
      };
    },

    hasAudio(passedObject) {
      passedObject.currentTrack = {
        name: null,
        artist: null,
      };
      passedObject.nowPlaying = function () {
        if (passedObject.currentTrack.name != null) {
          console.log(
            `${passedObject.currentTrack.name}' by ${passedObject.currentTrack.artist}`
          );
        }
      };
    },

    hasParktronic(passedObject) {
      passedObject.checkDistance = function (distance) {
        if (distance < 0.1) {
          console.log("Beep! Beep! Beep!");
        } else if (0.1 <= distance && distance < 0.25) {
          console.log("Beep! Beep!");
        } else if (0.25 <= distance && distance < 0.5) {
          console.log("Beep!");
        } else {
          console.log("");
        }
      };
    },
  };

  return decoratorObject;
}
