'use strict';



const fetchVideoInfo = require('youtube-info');


fetchVideoInfo('2ih0CluTjFg')
.then((videoInfo) => {
  console.log(videoInfo.title, videoInfo.url, videoInfo.views);
});
