console.log('Twitter followers tracking starts running');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

T.get('followers/ids', { screen_name: 'justinbieber' }, function(err, data, response) {
    //console.log(data);

    var r = Math.floor(Math.random() * data.length);
    PosTweets('@' + r + 'Do you love @justinbieber?');
    console.log("Tweet has been tweeted");
})

setInterval(PosTweets, 1000 * 20);

function PosTweets(text) {
    var post = {
        status: text
    }
    T.post('statuses/update', post, tweets);

    function tweets(err, data, response) {
        if (err) {
            console.log("Something went wrong");
        } else {
            console.log(data);
        }
    }
}