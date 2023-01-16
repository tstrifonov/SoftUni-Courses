function validityChecker(x1, y1, x2, y2) {
    let distanceOnetoZero = Math.sqrt((x1 - 0)**2 + (y1 - 0)**2);
    let distanceTwotoZero = Math.sqrt((x2 - 0)**2 + (y2 - 0)**2);
    let distanceOnetoTwo = Math.sqrt((x1 - y1)**2 + (x2 - y2)**2);

    console.log(`{${x1}, ${y1}} to {0, 0} is ${Number.isInteger(distanceOnetoZero) ? "valid" : "invalid"}`);
    console.log(`{${x2}, ${y2}} to {0, 0} is ${Number.isInteger(distanceTwotoZero) ? "valid" : "invalid"}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${Number.isInteger(distanceOnetoTwo) ? "valid" : "invalid"}`);
}

/*
The order of comparisons should always be first {x1, y1} to {0, 0}, 
then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}. 
*/

validityChecker(3, 0, 0, 4);
/*
{3, 0} to {0, 0} is valid
{0, 4} to {0, 0} is valid
{3, 0} to {0, 4} is valid
*/
validityChecker(2, 1, 1, 1);
/*
{2, 1} to {0, 0} is invalid
{1, 1} to {0, 0} is invalid
{2, 1} to {1, 1} is valid
*/