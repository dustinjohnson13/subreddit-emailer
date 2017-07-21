'use strict';

const Reddit = require('reddit');

let reddit = new Reddit();

// Example invocation:
// curl -X 'POST' <url> -H 'Content-Type: application/json' -d '{"title" : "Some Title", "url" : "http://thisisaurl.com", "description" : "Some cool stuff happened" }'
module.exports.newRedditPost = (event, context, callback) => {
    console.log('Body:', event.body);
    console.log('Headers:', event.headers);
    console.log('Method:', event.method);
    console.log('Params:', event.params);
    console.log('Query:', event.query);

    reddit.newPost(event.body, (err) => {
        if (err) {
            callback(err);
        } else {
            const response = {
                statusCode: 200
            };

            callback(null, response);
        }
    });
};
