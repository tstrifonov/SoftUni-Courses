function distanceBetweenPoints(x1, y1, x2, y2) {

    let distanceBwPoints = Math.sqrt(Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2));

    console.log(distanceBwPoints);

}

distanceBetweenPoints(7, 5, 3, 2);

/*
Write a JS function that calculates the distance between two points by given x and y coordinates. 
The input comes as four number elements in the format x1, y1, x2, y2. Each pair of elements are the coordinates of a point in 2D space.
The output should be returned as a result of your function.
*/