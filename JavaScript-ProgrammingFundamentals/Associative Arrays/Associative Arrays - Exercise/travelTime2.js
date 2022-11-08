function travelTime2(input) {
    let offers = {};

    for (let offer of input) {
        let [country, city, cost] = offer.split(" > ");

        if (!offers.hasOwnProperty(country)) {
            offers[country] = {};
        }

        if (!offers[country].hasOwnProperty(city)) {
            offers[country][city] = Number(cost);
        }

        if (offers[country][city] > Number(cost)) {
            offers[country][city] = Number(cost);
        }
    }

    let sortedCounties = Object.entries(offers);
    sortedCounties.sort((a, b) => a[0].localeCompare(b[0]));

    for (let country of sortedCounties) {
        country[1] = Object.entries(country[1]);
        country[1].sort((a, b) => a[1] - b[1]);
    }

    for (let country of sortedCounties) {
        let currentOffer = [];
        for (let offer of country[1]) {
            currentOffer.push(offer[0] + " -> " + offer[1]);
        }
        console.log(`${country[0]} -> ${currentOffer.join(" ")}`);
    }
}

/*
Write a function that collects and orders information about travel destinations.
As input, you will receive an array of strings.
Each string will consist of the following information with the format:
"Country name > Town name > Travel cost"

The Country name will be a string, the Town name will be a unique string, Travel cost will be a number.
If you receive the same Town name twice, you should keep the cheapest offer. Have in mind that one Country may have several Towns to visit.

After you finish the organizational part, you need to let Steven know which destination point to visit first. The order will be as follows:
First sort Country names alphabetically and then sort by lowest Travel cost.
*/

travelTime2([
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

travelTime2([
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
