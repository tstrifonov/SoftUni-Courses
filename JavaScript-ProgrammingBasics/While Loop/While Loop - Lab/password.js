function password(input) {
    let index = 0;
    let accountName = input[index];
    index++;
    let accountPassword = input[index];
    index++;

    while (input[index] !== accountPassword) {
        index++;
    }

    console.log(`Welcome ${accountName}!`);
}

password(["Nakov", "1234", "Pass", "1324", "1234"]);