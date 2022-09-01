function login(input) {
    let username = input[0];
    let password = "";

    for (let i = (username.length - 1); i >= 0; i--) {
        password = password + username.charAt(i);
    }

    let y = 1;
    let passAttempt = input[y];
    y++;

    while (passAttempt !== password) {
        if (y === 5) {
            console.log(`User ${username} blocked!`);
            break;
        }

        console.log(`Incorrect password. Try again.`);
        passAttempt = input[y];
        y++;
    }

    if (passAttempt === password) {
        console.log(`User ${username} logged in.`);
    }
}

login(['Acer','login','go','let me in','recA']);
login(['sunny','rainy','cloudy','sunny','not sunny']);

/*
 Login
You will be given a string representing a username. The correct password will be that username reversed. 
Until you receive the correct password print on the console: "Incorrect password. Try again.". 
When you receive the correct password print: "User {username} logged in." 
However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the program. 
The input comes as an array of strings - the first string represents username and each subsequent string is a password.
*/