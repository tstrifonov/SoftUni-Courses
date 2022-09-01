function theatrePromotions(dayType, age) {
    if (age < 0 || age > 122) {
        console.log("Error!");
    } else if (age >= 0 && age <= 18) {
        switch (dayType) {
            case "Weekday": console.log(`12$`); break;
            case "Weekend": console.log(`15$`); break;
            case "Holiday": console.log(`5$`); break;
        }
    } else if (age > 18 && age <= 64) {
        switch (dayType) {
            case "Weekday": console.log(`18$`); break;
            case "Weekend": console.log(`20$`); break;
            case "Holiday": console.log(`12$`); break;
        }
    } else if (age > 64 && age <= 122) {
        switch (dayType) {
            case "Weekday": console.log(`12$`); break;
            case "Weekend": console.log(`15$`); break;
            case "Holiday": console.log(`10$`); break;
        }
    }
}

theatrePromotions('Weekday', 42);

/*
A theatre is doing a ticket sale, but they need a program to
calculate the price of a single ticket. 
If the given age does not fit one of the categories, 
you should print "Error!".  You can see the prices in the table below:
Day / Age	    0 <= age <= 18	    18 < age <= 64	    64 < age <= 122
Weekday	            12$	                18$	                12$
Weekend	            15$	                20$	                15$
Holiday	             5$	                12$	                10$

Output
Print the price of the ticket according to the table, or "Error!" 
if the age is not in the table.
Constraints
⦁	The age will be in the interval [-1000…1000].
⦁	The type of day will always be valid. 
*/