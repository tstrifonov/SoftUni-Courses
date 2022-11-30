function addAstra(input) {
    let nutritionInfo = input.shift();
    let bestBuyInfo = nutritionInfo;
    let filter = /(?<separator>[\#\|])(?<itemName>[A-Za-z\ ]*)\1(?<expirationDate>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d*)\1/;
    let totalCalories = 0;

    while (filter.test(nutritionInfo)) {
        let foodFound = nutritionInfo.match(filter);

        if (foodFound[4] >= 0 && foodFound[4] <= 10000) {
            totalCalories += Number(foodFound[4]);
        }
        
        nutritionInfo = nutritionInfo.replace(filter, "empty");
    }

    let days = totalCalories / 2000;
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);

    while (filter.test(bestBuyInfo)) {
        let foodFound = bestBuyInfo.match(filter);

        if (foodFound[4] >= 0 && foodFound[4] <= 10000) {
            console.log(`Item: ${foodFound[2]}, Best before: ${foodFound[3]}, Nutrition: ${foodFound[4]}`)
        }

        bestBuyInfo = bestBuyInfo.replace(filter, "empty");
    }
}

/*
Calculate the total calories of all food items and then determine how many days you can last with the food you have. 
Keep in mind that you need 2000kcal a day.

------------Input / Constraints
You will receive a single string
------------Output
First, print the number of days you will be able to last with the food you have:
"You have food to last you for: {days} days!"
The output for each food item should look like this:
"Item: {item name}, Best before: {expiration date}, Nutrition: {calories}"
*/

addAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    );
/*
You have food to last you for: 2 days!
Item: Bread, Best before: 19/03/21, Nutrition: 4000
Item: Apples, Best before: 08/10/20, Nutrition: 200
Item: Carrots, Best before: 06/08/20, Nutrition: 500
*/

addAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]
);
/*
You have food to last you for: 9 days!
Item: Fish, Best before: 24/12/20, Nutrition: 8500
Item: Ice Cream, Best before: 03/10/21, Nutrition: 9000
Item: Milk, Best before: 05/09/20, Nutrition: 2000
*/