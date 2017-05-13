//Code pulling in info from keys.js
var keys = require("./keys.js");
var conKey= keys.twitterKeys.consumer_key;
var conSec= keys.twitterKeys.consumer_secret;
var accToKey= keys.twitterKeys.access_token_key;
var accToSec= keys.twitterKeys.access_token_secret;

//pulling in required packages
var Twitter = require ('twitter');

//assigning Twitter keys to client object
var client = new Twitter({
  consumer_key: conKey,
  consumer_secret: conSec,
  access_token_key: accToKey,
  access_token_secret: accToSec
});

//setting values for arguments to commands
var door = process.argv[2];
var input = process.argv[3];

//showing that liri.js is connected to keys.js
// console.log("--------------")
// console.log(keys);
// console.log("--------------");
// console.log(conKey);
// console.log("--------------");
// console.log(conSec);
// console.log("--------------");
// console.log(accToKey);
// console.log("--------------");
// console.log(accToSec);

//switch case allowing available commands from cmd
switch(door){
	case "my-tweets":
	//access to tweets
	client.get('favorites/list', function(error, tweets, response) {
	  if(error) throw error;
	  console.log(tweets);  // The favorites. 
	  console.log(response);  // Raw response object. 
	});
	console.log("Tweet Command called");
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