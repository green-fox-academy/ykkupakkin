'use strict';
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
console.log(url.replace("bots","odds"));

// Also, the URL is missing a crutial component, find out what it is and insert it too!
let rightUrl: string = url.replace("https//", "https://");
console.log(rightUrl.replace("bots", "odds"));