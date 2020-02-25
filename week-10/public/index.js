'use strict';

// --- Next and Previous controls
let _player = document.getElementById("player"),
    _playlist = document.getElementById("playlist"),
    _stop = document.getElementById("stop");

// functions
function playlistItemClick(clickedElement) {
    let selected = _playlist.querySelector(".selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    clickedElement.classList.add("selected");

    _player.src = clickedElement.getAttribute("data-ogg");
    _player.play();
}

 function playNext() {
    let selected = _playlist.querySelector("li.selected");
    if (selected && selected.nextElementSibling) {
        playlistItemClick(selected.nextElementSibling);
    }
}
 function playPrevious() {
    let selected = _playlist.querySelector("li.selected");
    if (selected && selected.previousElementSibling) {
        playlistItemClick(selected.previousElementSibling);
    }
}

// event listeners
_stop.addEventListener("click", function () {
	if(_player.paused){
    _player.play();
	}else{
	_player.pause();
	}
});

_player.addEventListener("ended", playNext);
_playlist.addEventListener("click", function (e) {
     if (e.target && e.target.nodeName === "LI") {
        playlistItemClick(e.target);
    }
});