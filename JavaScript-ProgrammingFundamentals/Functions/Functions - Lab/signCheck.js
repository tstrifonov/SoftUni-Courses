function signCheck(numOne, numTwo, numThree) {
    let flag = "Positive";

    if (numOne < 0) {
        if (numTwo < 0 && numThree < 0) {
            flag = "Negative";
        } else if (numTwo > 0 && numThree > 0) {
            flag = "Negative";
        }
    }

    if (numTwo < 0) {
        if (numOne < 0 && numThree < 0) {
            flag = "Negative";
        } else if (numOne > 0 && numThree > 0) {
            flag = "Negative";
        }
    }

    if (numThree < 0) {
        if (numTwo < 0 && numOne < 0) {
            flag = "Negative";
        } else if (numTwo > 0 && numOne > 0) {
            flag = "Negative";
        }
    }

    console.log(flag);
}

signCheck(-5, 3, 2);

/*
Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
Input
The input comes as parameters named numOne, numTwo, numThree.
Output
⦁	If the result is positive, print on the console -> "Positive"
⦁	Otherwise, print -> "Negative"
*/