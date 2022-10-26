function movies(input) {
    let movieLibrary = [];

    for (let command of input) {
        let infoHolder = command.split(" ");

        if (infoHolder.indexOf("addMovie") != -1) {
            infoHolder.shift();
            let movieName = infoHolder.join(" ");
            let newMovie = {name: movieName};
            movieLibrary.push(newMovie);
        } 
        
        else if (infoHolder.indexOf("directedBy") != -1) {
            let movieName = infoHolder.slice(0, infoHolder.indexOf("directedBy")).join(" ");
            let director = infoHolder.slice(infoHolder.indexOf("directedBy") + 1).join(" ");
            for (let movie of movieLibrary) {
                if (movie.name == movieName) {
                    movie.director = director;
                }
            }
        }  
        
        else if (infoHolder.indexOf("onDate") != -1) {
            let movieName = infoHolder.slice(0, infoHolder.indexOf("onDate")).join(" ");
            let date = infoHolder.slice(infoHolder.indexOf("onDate") + 1) + "";
            for (let movie of movieLibrary) {
                if (movie.name == movieName) {
                    movie.date = date;
                }
            }
        }
    }

    for (let movie of movieLibrary) {
        if (movie.name != undefined && movie.director != undefined && movie.date != undefined) {
            console.log(JSON.stringify(movie));
        }
    }
}

/*
Write a function that stores information about movies inside an array. The movie's object info must be name, director, and date. 
You can receive several types of input:
"addMovie {movie name}" – add the movie
"{movie name} directedBy {director}" – check if the movie exists and then add the director
"{movie name} onDate {date}" – check if the movie exists and then add the date
At the end print all the movies that have all the info (if the movie has no director, name, or date, don’t print it) in JSON format.
*/

movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);
/*
{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}
{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}
*/

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]);
/*
{"name":"The Avengers","director":"Anthony Russo","date":"30.07.2010"}
*/