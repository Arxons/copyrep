const btnPlay = document.querySelector('.icon-play'),
    video = document.getElementById('main-video'),
    barVol = document.querySelector('.progress-bar-vol'),
    btnVol = document.querySelector('.icon-volume'),
    btnFullScreen = document.querySelector('.icon-fullscreen'),
    btnVideoPlay = document.querySelector('.button-play'),
    speedControl = document.querySelector('.speed')

let playStatus = false;
let volumeStatus = false;
let screenStatus = false;
video.playbackRate = 1;

//Off scroll on space
window.addEventListener('keydown', function (event) {
    if (event.keyCode === 32 && event.target === document.body) {
        event.preventDefault();
    }
});

function playOnStop() {
    if (!playStatus) {
        video.play()
        document.querySelector('.main-play').style.opacity = '0';
        btnPlay.style.backgroundImage = 'url(images/video/pause.svg)'
        playStatus = true;
    } else {
        video.pause();
        document.querySelector('.main-play').style.opacity = '1'
        btnPlay.style.backgroundImage = 'url(images/video/play.svg)'
        playStatus = false;
    }
}

function progressBar() {
    progress.value = (video.currentTime / video.duration) * 100
    progress.style.background = `linear-gradient(to right, #710707 0%, #710707 ${progress.value}%, #c4c4c4 ${progress.value}%, #c4c4c4 100%)`
}

function rewind() {
    video.currentTime = (progress.value * video.duration) / 100
    console.log(video.currentTime)
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
    Number.parseInt(value) === 100 ? playOnStop() : value;
}

function changeVolume() {
    video.volume = barVol.value / 100
}

function volOnOff() {
    if (!volumeStatus) {
        barVol.value = 0;
        video.volume = 0;
        volumeStatus = true;
        barVol.style.background = `linear-gradient(to right, #710707 0%, #710707 ${barVol.value}%, #c4c4c4 ${barVol.value}%, #c4c4c4 100%)`
        btnVol.style.backgroundImage = `url(images/video/mute.svg)`;
    } else {
        barVol.value = 50;
        video.volume = 0.5;
        volumeStatus = false;
        barVol.style.background = `linear-gradient(to right, #710707 0%, #710707 ${barVol.value}%, #c4c4c4 ${barVol.value}%, #c4c4c4 100%)`
        btnVol.style.backgroundImage = `url(images/video/volume.svg)`;
    }
}

function fullScreen() {
    if (screenStatus === false) {
        video.requestFullscreen()
        screenStatus = true
    } else {
        document.exitFullscreen();
        screenStatus = false;
    }
}

function videoSlow() {
    video.playbackRate > 0 ? video.playbackRate -= 0.5 : false
    speedControl.innerHTML = `${video.playbackRate}`;
    speedControl.classList.add('active');
    setTimeout(() => {
        speedControl.classList.remove('active');
    }, 150);
}

function videoSpeedup() {
    video.playbackRate += 0.5;
    speedControl.innerHTML = `${video.playbackRate}`;
    speedControl.classList.add('active');
    setTimeout(() => {
        speedControl.classList.remove('active');
    }, 150);
}

function videoKeys(event) {
    event.code === 'Space' ? playOnStop() :
        event.code === 'KeyM' ? volOnOff() :
            event.code === 'KeyF' ? fullScreen() :
                event.code === 'Comma' ? videoSlow() :
                    event.code === 'Period' ? videoSpeedup() : event
}

progress.addEventListener('input', rewind);
video.addEventListener('timeupdate', progressBar);
btnPlay.addEventListener('click', playOnStop);
video.addEventListener('click', playOnStop);
btnVideoPlay.addEventListener('click', playOnStop);
barVol.addEventListener('input', changeVolume);
btnVol.addEventListener('click', volOnOff);
btnFullScreen.addEventListener('click', fullScreen);
document.querySelector('body').addEventListener('keydown', videoKeys)