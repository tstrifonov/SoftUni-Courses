function oscarsCeremony(input) {
    let rent = Number(input[0]);
    let statuette = rent * 0.7;
    let kettering = statuette * 0.85;
    let voicing = kettering * 0.5;
    let sum = rent + statuette +kettering + voicing;

    console.log(sum.toFixed(2));
}

oscarsCeremony(["3500"]);