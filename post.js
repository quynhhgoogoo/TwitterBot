console.log('Posting Tweets to account');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

setInterval(PosTweets, 1000 * 20);

function PosTweets() {
    var r = Math.floor(Math.random() * 1000);
    var post = {
        status: 'Mina olen Gau ' + r
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