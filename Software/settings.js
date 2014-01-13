var fs = require('fs');
var extend = require('xtend');

var settings = {
    user_stream: {
        consumer_key: '...',        // add your twitter consumer key here
        consumer_secret: '...',     // add your twitter consumer secret here
        access_token_key: '...',    // add your twitter access token key here
        access_token_secret: '...'  // add your twitter access token secret here   
    },
    twitter_user: '...',            // add you twitter username here


    apiUrl: "https://api.spark.io",
    coreuser: "...",                // add spark user name: eg: user@spark.io
    corepassword: "...",            // your spark password
    coreID: "..."                   // you core ID
};

try {
  if (fs.existsSync('./settings.json')) {
    var overrides = fs.readFileSync('./settings.json');
    settings = extend(settings, JSON.parse(overrides));
  }
} catch(ex) {
  console.error('tried to check and parse settings.json, but could not do it ', ex);
}

module.exports = settings;
