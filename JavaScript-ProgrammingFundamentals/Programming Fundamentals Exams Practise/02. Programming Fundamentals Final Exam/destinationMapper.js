function destinationMapper(input) {
    let text = input;
    const re = /([=\/])[A-Z][A-Za-z]{3,}\1/;
    let destinations = [];
    
    while (text.match(re) != null) {
        let destination = text.match(re)[0];
        destinations.push(destination.slice(1, destination.length - 1));
        let replacement = text.match(re)[0];
        text = text.replace(replacement, "E3p!#");
    }

    let travelPoints = destinations.join("").length;
    
    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
/*
Destinations: Hawai, Cyprus
Travel Points: 11
*/

destinationMapper(("ThisIs some InvalidInput"));
/*
Destinations:
Travel Points: 0
*/