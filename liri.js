require("dotenv").config();
const spotifyCall = require("./spotifyCall.js");
const omdbCall = require("./omdbCall.js");
const bitCall = require("./bandsintownCall.js");

// Spotify Call==============================

spotifyCall.spotifyThis();
// Spotify Call==============================

// OMDB Call=================================
omdbCall.movieThis();
// OMDB Call=================================

// Do-What-It-Says===========================
// spotifyCall.spotifyThisToo();
omdbCall.getMovieToo();
// bitCall.concertThisToo();
// Do-What-It-Says===========================

// Concert-This==============================
bitCall.concertThis();
// Concert-This==============================
