console.log('Posting Tweets to account');

var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var post = {
    status: 'Mina olen Gau'
}
T.post('statuses/update', post, tweets);

function tweets(err, data, response) {
    if (err) {
        console.log("Something went wrong");
    } else {
        console.log(data);
    }
}