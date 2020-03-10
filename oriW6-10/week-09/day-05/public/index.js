window.onload = () => {
    let songReq = new XMLHttpRequest();
    songReq.open('GET','http://localhost:3000/songs')
    songReq.send();
    songReq.onload = (response) => {
        if (response.target.status === 200) {
            let resultObject = JSON.parse(response.target.response);
            resultObject.forEach(song => {
                document.querySelector('.mainContainer').appendChild(createSongIframe(song));
            })
        }
    }
}

const createSongIframe = (songObject) => {
    let currentIframe = document.createElement('iframe');
    currentIframe.width = '320';
    currentIframe.height = '180';
    currentIframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    currentIframe.src = songObject.url;
    currentIframe.classList.add('video');
    return currentIframe;
}
