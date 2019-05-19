var exports = module.exports = {};

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var spotifyThisSong = process.argv[2];
var mySong = process.argv[3];

exports.spotifyThis = function () {
    if (spotifyThisSong === 'spotify-this-song' && mySong) {
        console.log("Spotify called...")
        getSong();
    }
    else if (spotifyThisSong === 'spotify-this-song' && mySong != true) {
        console.log("I hope this is the right Sign...")
        theSign();
    }
}
function getSong() {
    spotify.search({ type: 'track', query: mySong }, function (error, data) {
        if (error) {
            return console.log('Error: ' + error);
        }
        console.log('--------------------');
        console.log('Artist(s): ' + data.tracks.items[0].artists[0].name);
        console.log('Song Title: ' + data.tracks.items[0].name);
        console.log('Preview Link: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
        console.log('--------------------');
    });
}
function theSign() {
    spotify.search({ type: 'track', query: 'The Sign Ace of Base' }, function (error, data) {
        if (error) {
            return console.log('Error: ' + error);
        }
        console.log('--------------------');
        console.log('Artist(s): ' + data.tracks.items[0].artists[0].name);
        console.log('Song Title: ' + data.tracks.items[0].name);
        console.log('Preview Link: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
        console.log('--------------------');
    });
}

var fs = require("fs");
var doWhatItSays = process.argv[2];
exports.spotifyThisToo = function () {
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
        mySong = dataArr[1];
        if (dataArr[0] === "spotify-this-song" && mySong) {
            getSong();
        }
    });
}
