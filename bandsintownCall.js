var exports = module.exports = {};
const axios = require("axios");
const moment = require('moment');

var artistCommand = process.argv[2];
var artistName = process.argv[3];
exports.concertThis = function () {
    if (artistCommand === "concert-this" && artistName) {
        console.log("Bands In Town Called...")
        bitCall();
    }
}

function bitCall() {
    axios.get("https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp").then(
        function (response) {
            console.log('--------------------');
            console.log("Artist(s) Name: " + artistName);
            console.log("Venue: " + response.data[0].venue.name);
            console.log("Venue Location: " + response.data[0].venue.city + "," + response.data[0].venue.country)
            console.log("Date: " + moment(response.data[0].datetime).format("MM Do YYYY"))
            console.log('--------------------');

        });
}


var fs = require("fs");
var doWhatItSays = process.argv[2];
exports.concertThisToo = function () {
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
        artistName = dataArr[1];
        if (dataArr[0] === "concert-this" && artistName) {
            bitCall();
        }
    });
}
