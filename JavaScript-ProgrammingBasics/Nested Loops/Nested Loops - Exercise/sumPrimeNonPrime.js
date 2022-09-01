function sumPrimeNonPrime(input) {
    let primeSum = 0;
    let nonPrimeSum = 0;
    let index = 0;
    let command = input[index];
    index++;

    while (command != "stop") {
        let n = Number(command);
        
        if (n < 0) {

            console.log(`Number is negative.`);

        } else {

            let divisors = 0;

            for (let i = 1; i <= n; i++) {
                if (n % i === 0) {
                    divisors++;
                }
                
                if (divisors > 2) {
                    break;
                }
            }

            if (divisors == 2) {
                primeSum = primeSum + n;
            } else {
                nonPrimeSum = nonPrimeSum + n;
            }

        }
       
        command = input[index];
        index++;
        
    }
    
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3", "9","0", "7", "19", "4", "stop"]);