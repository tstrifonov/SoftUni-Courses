function passwordGuess(input) {
    let realPassword = "s3cr3t!P@ssw0rd";
    let newPassword = input[0];

    if (realPassword === newPassword) {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}

passwordGuess(["s3cr3t!P@ssw0rd"]);