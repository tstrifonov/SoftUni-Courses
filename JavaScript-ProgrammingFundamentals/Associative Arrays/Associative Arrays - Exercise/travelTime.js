function travelTime(input) {
    let offers = input.sort((a, b) => a.localeCompare(b));

    let countries = {};

    for (let offer of offers) {
        let [country, city, price] = offer.split(" > ");

        if (!countries[country]) {
            let cities = {};
            countries[country] = cities;
        }

        if (!countries[country][city]) {
            countries[country][city] = price;
        } else if (countries[country][city] > price) {
            countries[country][city] = price;
        }
    }

    for (let country in countries) {
        let countrName = country;
        let countryEntires = Object.entries(countries[country]);
        let countrySpecificOffer = [];

        for (let entry of countryEntires) {
            let city = entry[0];
            let price = entry[1];
            countrySpecificOffer.push(city + " -> " + price);
        }

        console.log(`${countrName} -> ${countrySpecificOffer.join(" ")}`);
    }
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]);
/*
Albania -> Tirana -> 25000 
Bulgaria -> Lukovit -> 10 Sofia -> 25000 Varna -> 25010 
Kalimdor -> Orgrimar -> 25000
*/

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);
/*
Albania -> Tirana -> 1000
Bulgaria -> Sofia -> 200 Sopot -> 800
France -> Paris -> 2000
*/