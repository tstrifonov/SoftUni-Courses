function worldTour(input) {
    let stops = input.shift();
    let instructions = input.shift();

    while (instructions != "Travel") {
       
        if (instructions.includes("Add")) {
            let index = Number(instructions.split(":")[1]);
            let string = instructions.split(":")[2];

            if (index >= 0 && index < stops.length) {
                stops = stops.slice(0, index) + string + stops.slice(index);
                console.log(stops);
            }
        } else if (instructions.includes("Remove")) {
            let startIndex = Number(instructions.split(":")[1]);
                let endIndex = Number(instructions.split(":")[2]);
                
                if ((startIndex >= 0 && startIndex < stops.length) && (endIndex >= 0 && endIndex < stops.length)) {
                    stops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
                    console.log(stops);
                }
        } else if (instructions.includes("Switch")) {
            let oldString = instructions.split(":")[1];
            let newString = instructions.split(":")[2];

           while (stops.includes(oldString)) {
                stops = stops.replace(oldString, newString);
            }
            console.log(stops);
        }
        
        instructions = input.shift();
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"]);
/*
Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece
*/

console.log("------------");

worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"]);
/*
AlbNigeriaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
AlbNaania:Bulgaria:Cyprus:Deuchland
Ready for world tour! Planned stops: AlbNaania:Bulgaria:Cyprus:Deuchland
*/