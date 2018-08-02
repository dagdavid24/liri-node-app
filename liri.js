require("dotenv").config();
var twitterKeys = require("./keys.js");
var request = require("request");
var twitter = require("twitter");
var spotify = require("node-spotify-api");

var command = process.argv[2];
var argument = process.argv[3];

function retrieveTweets() {
    if (command === 'my-tweets') {
        var client = new twitter(twitterKeys.twitter);
        var params = { screen_name: '@CassoPi3', count: 5 };
        client.get('statuses/user_timeline', params, function (error, tweets, response) {
            if (!error) {
                for (var i = 0; i < tweets.length; i++) {
                    var tweeties = tweets[i].text;
                    console.log("*************TWEET*************");
                    console.log("-------------------------------");
                    console.log("                               ");
                    console.log(tweeties);
                    var twighlight = tweets[i].created_at;
                    console.log("                               ");
                    console.log("*********CREATION DATE*********");
                    console.log("-------------------------------");
                    console.log("                               ");
                    console.log(twighlight);
                    console.log("                               ");
                }
            } else {
                console.log(error);
            }
        })
    }
}

retrieveTweets();