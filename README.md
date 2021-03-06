# Liri Node App

![Screenshot (2)](https://user-images.githubusercontent.com/46907256/57977416-cc9afd00-79bd-11e9-9431-a8f5d5ee4f56.png)

![Screenshot (4)](https://user-images.githubusercontent.com/46907256/57977429-1f74b480-79be-11e9-9e08-6d42936056f1.png)

![Screenshot (5)](https://user-images.githubusercontent.com/46907256/57977431-23a0d200-79be-11e9-8d20-f3fd8c0ac93b.png)

# What Each Command Should Do
<h2>node liri.js concert-this <artist/band name here></h2>

This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

Name of the venue

Venue location

Date of the Event (use moment to format this as "MM/DD/YYYY")

<h2>node liri.js spotify-this-song '<song name here>'</h2>

This will show the following information about the song in your terminal/bash window

Artist(s)

The song's name

A preview link of the song from Spotify

The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

<h2>node liri.js movie-this '<movie name here>'</h2>

This will output the following information to your terminal/bash window:

  * Title of the movie.
  * Year the movie came out.
  * IMDB Rating of the movie.
  * Rotten Tomatoes Rating of the movie.
  * Country where the movie was produced.
  * Language of the movie.
  * Plot of the movie.
  * Actors in the movie.
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

You'll use the axios package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

<h2>node liri.js do-what-it-says</h2>

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
