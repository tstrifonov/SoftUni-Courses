function city(cityObject) {
    let keys = Object.keys(cityObject);
    let values = Object.values(cityObject);

    for (let key of keys) {
        console.log(`${key} -> ${cityObject[key]}`);
    }
}

city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});
/*
name -> Sofia
area -> 492
population -> 1238438
country -> Bulgaria
postCode -> 1000
*/

city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});
/*
name -> Plovdiv
area -> 389
population -> 1162358
country -> Bulgaria
postCode -> 4000
*/