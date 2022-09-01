function lunchBreak(input) {
    let seriesName = input[0];
    let episodeLength = Number(input[1]);
    let breakLength = Number(input[2]);

    let foodTime = Number(breakLength / 8);
    let napTime = Number(breakLength / 4);
    let watchTimeLeft = Number(breakLength - foodTime - napTime);
    let timeDifference = 0;

    if (watchTimeLeft >= episodeLength) {
        timeDifference = Number(watchTimeLeft - episodeLength);
        console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(timeDifference)} minutes free time.`);
    } else {
        timeDifference = Number(episodeLength - watchTimeLeft);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(timeDifference)} more minutes.`);
    }

}

lunchBreak(["GOT", "60", "96"]);
