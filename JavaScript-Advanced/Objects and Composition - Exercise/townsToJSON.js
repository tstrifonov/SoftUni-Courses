function townsToJSON(input) {
  let result = [];
  input.shift();

  for (let entry of input) {
    let [town, latitude, longitude] = entry.split(" | ");
    town = town.split("").slice(2).join("");
    latitude = Number(latitude).toFixed(2);
    longitude = Number(
      longitude.split("").reverse().slice(2).reverse().join("")
    ).toFixed(2);
    let currentoTown = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    result.push(currentoTown);
  }

  //console.log(JSON.stringify(result));
  return JSON.stringify(result);
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
/*
[{"Town":"Sofia",
  "Latitude":42.7,
  "Longitude":23.32
},
{"Town":"Beijing", 
 "Latitude":39.91, 
 "Longitude":116.36
}]
*/

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
/*
[{"Town":"Sofia",
  "Latitude":42.7,
  "Longitude":23.32
},
{"Town":"Beijing", 
 "Latitude":39.91, 
 "Longitude":116.36
}]
*/
