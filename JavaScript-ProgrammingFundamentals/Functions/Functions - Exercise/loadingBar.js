function loadingBar(percents) {
    let bar = "[";
    for (let i = 1; i <= percents / 10; i++) {
        bar += "%"
    }
    for (let i = (percents / 10) + 1; i <= 10; i++) {
        bar += "."
    }
    bar += "]";

    if (percents == 100) {
        console.log(`${percents}% Complete!`);
        console.log(`${bar}`);
    } else {
        console.log(`${percents}% ${bar}`);
        console.log(`Still loading...`);
    }
}

loadingBar(20);

/*
You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.
Examples
Input	Output
30	30% [%%%.......]
Still loading...
50	50% [%%%%%.....]
Still loading...
100	100% Complete!
[%%%%%%%%%%]
*/