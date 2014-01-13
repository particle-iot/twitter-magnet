var settings = require('./settings.js');
var controller = require('./lib/controller.js');
var Twit = require('twit');

//create stream
//var T = new Twit(settings.user_stream);

var T = new Twit({
    consumer_key:         '...'     // add your twitter consumer key here
  , consumer_secret:      '...'     // add your twitter consumer secret here
  , access_token:         '...'     // add your twitter access token key here
  , access_token_secret:  '...'     // add your twitter access token secret here   
})


var stream = T.stream('user', { track: "settings.twitter_user"});


var commands = {
    "lcd": controller.lcdFn
}


//listen stream data
stream.on('tweet', function(json) {
    var text = json.text.toLowerCase();
    console.log("heard " + text);

    for(var name in commands) {
        if (text.indexOf(name) >= 0) {
            var start = text.indexOf(name) + name.length + 1;
            text = text.substr(start);
            console.log("running command " + name + " with args " + text);
            commands[name](text);
        }
    }
});