function buildings(input) {
    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let i = floor; i > 0; i--) {
        let floorRooms = "";
        for (let y = 0; y < rooms; y++) {
            if (i === floor) {
                floorRooms = floorRooms + ` L${i}${y}`;
            } else if (i % 2 ===0) {
                floorRooms = floorRooms + ` O${i}${y}`;
            } else if (i % 2 !== 0) {
                floorRooms = floorRooms + ` A${i}${y}`;
            }
        }
        console.log(floorRooms);
    }

}

buildings(["6", "4"]);