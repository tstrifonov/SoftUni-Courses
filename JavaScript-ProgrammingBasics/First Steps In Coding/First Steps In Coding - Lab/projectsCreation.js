function projectsCreation(input) {
    let name = input[0];
    let projectNumber = Number(input[1]);
    let hoursNeeded = Number(projectNumber * 3);
    
    console.log ("The architect " + name + " will need " + hoursNeeded + " hours to complete " + projectNumber + " project/s.");
}

projectsCreation(["Тихомир Трифонов", "5"]);