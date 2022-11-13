function cutAndReverse(input) {
    let firstHalf = input.substring(0, input.length / 2);
    let secondHalf = input.substring(input.length / 2);

    firstHalf = firstHalf.split("").reverse().join("");
    secondHalf = secondHalf.split("").reverse().join("");

    console.log(firstHalf);
    console.log(secondHalf);
}


/*
The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.
*/

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
/*
ThisIsDifficult
ThisIsSoAmazing
*/

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
/*
IBetYouCantDoThis
ImSoGoodAtThisJob
*/