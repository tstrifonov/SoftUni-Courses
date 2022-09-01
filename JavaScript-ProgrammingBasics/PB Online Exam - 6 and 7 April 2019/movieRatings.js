function movieRatings(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;
    let movieName = input[index];
    index++;
    let movieRating = Number(input[index]);
    index++;
    let highestName = "";
    let highestRating = movieRating;
    let lowestName = "";
    let lowestRating = movieRating;
    let averageRating = 0;

    for (let i = 1; i <= n; i++) {
        if (movieRating >= highestRating) {
            highestName = movieName;
            highestRating = movieRating
        } else if (movieRating <= lowestRating) {
            lowestName = movieName;
            lowestRating = movieRating;
        }

        averageRating = averageRating + movieRating;

        movieName = input[index];
        index++;
        movieRating = Number(input[index]);
        index++;

    }

    averageRating = averageRating / n;

    console.log(`${highestName} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestName} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
}

movieRatings(["5", "A Star is Born", "7.8", "Creed 2", "7.3", "Mary Poppins", "7.2", "Vice", "7.2", "Captain Marvel", "7.1"]);