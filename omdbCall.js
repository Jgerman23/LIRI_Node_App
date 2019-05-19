const axios = require("axios");
var exports = module.exports = {};

var movieCommand = process.argv[2];
var movieName = process.argv[3];
exports.movieThis = function(){
    if (movieCommand === 'movie-this' && movieName) {
    console.log("OMDB called...");
    getMovie();
  } else if (movieCommand === 'movie-this' && movieName != true) {
    console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
    console.log("It's on Netflix!");
    mrNobody();
  } 
}
function getMovie() {
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=4a0715cb").then(
        function (response) {
            console.log('--------------------');
            console.log('Movie Title: ' + response.data.Title);
            console.log('Release Year: ' + response.data.Year);
            console.log('IMDb Rating: ' + response.data.imdbRating);
            console.log('Country: ' + response.data.Country);
            console.log('Language: ' + response.data.Language);
            console.log('Plot: ' + response.data.Plot);
            console.log('Lead Actors: ' + response.data.Actors);
            console.log('--------------------');
        }
    );
}
function mrNobody(){
    var mrNobodyMovie = "Mr. Nobody"
    axios.get("http://www.omdbapi.com/?t=" + mrNobodyMovie + "&y=&plot=short&apikey=4a0715cb").then(
        function (response) {
            console.log('--------------------');
            console.log('Movie Title: ' + response.data.Title);
            console.log('Release Year: ' + response.data.Year);
            console.log('IMDb Rating: ' + response.data.imdbRating);
            console.log('Country: ' + response.data.Country);
            console.log('Language: ' + response.data.Language);
            console.log('Plot: ' + response.data.Plot);
            console.log('Lead Actors: ' + response.data.Actors);
            console.log('--------------------');
        });
}

var fs = require("fs");
var doWhatItSays = process.argv[2];
exports.getMovieToo = function () {
    if (doWhatItSays === "do-what-it-says") {
        doIt();
    }
}
function doIt() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        if (error) {
            console.log("Error: " + error);
        }
        dataArr = data.split(",");
        console.log(dataArr[0] + " " + dataArr[1]);
        movieName = dataArr[1];
        if (dataArr[0] === "movie-this" && movieName) {
            getMovie();
        }
    });
}