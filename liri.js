//Code pulling in info from keys.js
var keys = require("./keys.js");
var conKey= keys.twitterKeys.consumer_key;
var conSec= keys.twitterKeys.consumer_secret;
var accToKey= keys.twitterKeys.access_token_key;
var accToSec= keys.twitterKeys.access_token_secret;
var door = process.argv[2];

//showing that liri.js is connected to keys.js
console.log("--------------")
console.log(keys);
console.log("--------------");
console.log(conKey);
console.log("--------------");
console.log(conSec);
console.log("--------------");
console.log(accToKey);
console.log("--------------");
console.log(accToSec);

//switch case allowing available commands from cmd
switch(door){
	case "my-tweets":
	console.log("Tweet Command called");
	//access to tweets
	break;

	case "spotify-this-song":
	console.log("Spotify Command called");
	//get spotify info on this song
	break;

	case "movie-this":
	console.log("Movie Command called");
	//get movie info on this
	break;

	case "do-what-it-says":
	console.log("Misc Command called");
	//do something else
	break;

	default:
	break
}