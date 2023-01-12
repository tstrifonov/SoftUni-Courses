function encryptingPassword(input) {
    let n = Number(input.shift());
    let validOrNot = /(?<symbol>.+)\>(?<groupOne>\d{3})\|(?<groupTwo>[a-z]{3})\|(?<groupThree>[A-Z]{3})\|(?<groupFour>[^<>]{3})\<\1/;

    for (let i = 0; i < n; i++) {
        let password = input[i];
        if (validOrNot.test(password)) {
            let resultArr = validOrNot.exec(password);
            let encryptedPassword = resultArr[2] + resultArr[3] + resultArr[4] + resultArr[5];
            console.log(`Password: ${encryptedPassword}`);
        } else {
            console.log("Try another password!");
        }
    }
}

encryptingPassword((["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"]));
/*
Try another password!
Password: 123yesYES!!!
Try another password!
*/

console.log("----------");

encryptingPassword((["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"]));
/*
Password: 111mquBAUmqu
Try another password!
Password: 088abcAAA***
Try another password!
Try another password!
*/