function biggestOfThreeNumbers(a, b, c) {
    let biggestNum = a;

   if (b > biggestNum) {
    biggestNum = b;
   }

   if (c > biggestNum) {
    biggestNum = c;
   }

   console.log(biggestNum);

}

biggestOfThreeNumbers(3, -5, 123);