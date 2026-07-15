const bgAudio = document.getElementById("bgAudio");
const audioToggle = document.getElementById("audioToggle");

const playlist = [
    "audio/song1.mp3",
    "audio/song2.mp3",
    "audio/song3.mp3",
    "audio/song4.mp3",
    "audio/song5.mp3",
];

let currentTrack = 0;
let audioStarted = false;


// Load first song
bgAudio.src = playlist[currentTrack];


// Play next song automatically
bgAudio.addEventListener("ended", () => {

    currentTrack++;

    if (currentTrack >= playlist.length) {
        currentTrack = 0; // restart playlist
    }

    bgAudio.src = playlist[currentTrack];
    bgAudio.play();

});


// Start audio after first interaction
function startAudio() {

    if (!audioStarted) {

        bgAudio.volume = 0.35;

        bgAudio.play()
            .then(() => {

                audioStarted = true;

                audioToggle.textContent = "🔊";
                audioToggle.setAttribute("aria-pressed", "true");

            })
            .catch(err => {
                console.log(err);
            });

    }

}


document.addEventListener(
    "click",
    startAudio,
    { once: true }
);

document.addEventListener(
    "keydown",
    startAudio,
    { once: true }
);

document.addEventListener(
    "touchstart",
    startAudio,
    { once: true }
);


// Manual mute/unmute button
audioToggle.addEventListener("click", (e)=>{

    e.stopPropagation();

    if(bgAudio.paused){

        bgAudio.play();

        audioToggle.textContent="🔊";
        audioToggle.setAttribute("aria-pressed","true");

    }
    else{

        bgAudio.pause();

        audioToggle.textContent="🔇";
        audioToggle.setAttribute("aria-pressed","false");

    }

});