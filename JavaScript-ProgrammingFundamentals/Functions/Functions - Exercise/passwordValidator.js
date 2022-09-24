function passwordValidator(password) {

    if (passwordLength(password) && passwordChars(password) && passwordTwoDigits(password)) {
        console.log("Password is valid");
    } else {
        if (!passwordLength(password)) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (!passwordChars(password)) {
            console.log("Password must consist only of letters and digits");
        }
        if (!passwordTwoDigits(password)) {
            console.log("Password must have at least 2 digits");
        }
    }


    function passwordLength(password) {
        return password.length >= 6 && password.length <= 10; //true or false
    }

    function passwordChars(password) {
        let flag = true;
        for (let i = 0; i < password.length; i++) {
            let char = password[i].charCodeAt();
            if (char < 48 || (char > 57 && char < 65) || (char > 90 && char < 97) || char > 122) {
                flag = false;
            }
        }
        return flag ;  //true or false
    }    

    function passwordTwoDigits(password) {
        let digitsCount = 0;
        for (let i = 0; i < password.length; i++) {
            if (password[i].charCodeAt() >= 48 && password[i].charCodeAt() <= 57) {
                digitsCount++;
            }
        }

        return digitsCount >= 2; //true or false
    }
}

passwordValidator('logIn'); //Password must be between 6 and 10 characters Password must have at least 2 digits
console.log("------------------");
passwordValidator('MyPass123'); //Password is valid
console.log("------------------");
passwordValidator('Pa$s$s'); //Password must consist only of letters and digits Password must have at least 2 digits

/*
Write a function that checks if a given password is valid. Password validations are:
1) The length should be 6 - 10 characters (inclusive)
2) It should consist only of letters and digits
3) It should have at least 2 digits 
If a password is a valid print: "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
"Password must be between 6 and 10 characters"
"Password must consist only of letters and digits"
"Password must have at least 2 digits"
*/