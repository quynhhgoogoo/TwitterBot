console.log('The log is starting');

var Twit = require('twit');
var config = require('./config/config');

var T = new Twit(config);
var params = { q: 'justinbieber', count: 5 }

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].text);
    }
    //console.log(data);
}