import playList from "./playList.js";

const playBtn = document.querySelector('.play'),
    playNext = document.querySelector('.play-next'),
    playPrev = document.querySelector('.play-prev'),
    list = document.querySelector('.play-list'),
    proPlayer = document.querySelector('.pro-player'),
    proPlayerBtn = document.querySelector('.pro-player-btn'),
    proPlayBtn = document.querySelector('.pro-play'),
    proPlayNext = document.querySelector('.pro-play-next'),
    proPlayPrev = document.querySelector('.pro-play-prev'),
    audioLength = document.querySelector('.audio-length'),
    volumeLength = document.querySelector('.volume-length'),
    minutes = document.querySelector('.minutes'),
    secundes = document.querySelector('.secundes'),
    minutesDuration = document.querySelector('.minutes-duration'),
    secundesDuration = document.querySelector('.secundes-duration'),
    playerIcon = document.querySelector('.pro-volume'),
    audio = new Audio();

let isPlay = false;
let isVisible = false;
let isVolume = true;
let playNum = 0;

playList.forEach((e, i) => {
    const li = document.createElement('li')
    li.classList.add('play-item');
    li.textContent = playList[i].title;
    list.append(li);

})

function playAudio() {
    if (!isPlay) {
        audio.src = playList[playNum].src;
        audio.play()
        isPlay = true
        playBtn.classList.add('pause')
        proPlayBtn.classList.add('pause')
    } else {
        audio.pause()
        isPlay = false
        playBtn.classList.remove('pause')
        proPlayBtn.classList.remove('pause')
    }
}

const liAll = document.querySelectorAll('.play-item')
liAll[playNum].classList.add('item-active')

function audioNext() {
    if (playNum != 3) {

        playNum++
        liAll[playNum].classList.add('item-active')
        liAll[playNum - 1].classList.remove('item-active')
        if (isPlay) {
            playAudio()
        }
    } else {
        playNum = 0
        liAll[playNum].classList.add('item-active')
        liAll[playList.length - 1].classList.remove('item-active')
        if (isPlay) {
            playAudio()
        }
    }
}

function audioPrev() {
    if (playNum != 0) {
        playNum--
        liAll[playNum].classList.add('item-active')
        liAll[playNum + 1].classList.remove('item-active')
        if (isPlay) {
            playAudio()
        }
    } else {
        playNum = 3
        liAll[playNum].classList.add('item-active')
        liAll[0].classList.remove('item-active')
        if (isPlay) {
            playAudio()
        }
    }
}

function audioTime() {
    audioLength.value = (audio.currentTime / audio.duration) * 100
    console.log(audio.duration)
    if (audio.currentTime < 10) {
        secundes.textContent = `0${Math.floor(audio.currentTime)}`
        minutes.textContent = 0;
    } else if (audio.currentTime >= 10 && audio.currentTime < 60) {
        secundes.textContent = Math.floor(audio.currentTime)
        minutes.textContent = 0;
    } else {
        if (Math.floor(audio.currentTime % 60) < 10) {
            secundes.textContent = `0${Math.floor(audio.currentTime % 60)}`
        } else secundes.textContent = Math.floor(audio.currentTime % 60)
        minutes.textContent = `0${Math.floor(audio.currentTime / 60)}`
    }
    if (audio.duration < 60) {
        secundesDuration.textContent = Math.floor(audio.duration);
        minutesDuration.textContent = "00";
    } else {
        if (Math.floor(audio.duration % 60) < 10) {
            secundesDuration.textContent = `0${Math.floor(audio.duration % 60)}`
        } else secundesDuration.textContent = Math.floor(audio.duration % 60)
        minutesDuration.textContent = `0${Math.floor(audio.duration / 60)}`
    }

    if (audioLength.value == 100) {
        playAudio()
        audioNext()
        playAudio()

    }

}

function rewind() {
    audio.currentTime = (audioLength.value * audio.duration) / 100
}



playBtn.addEventListener('click', () => {
    proPlayerBtn.style.top = "15%";
    proPlayerBtn.style.transform = "translate(-50%) rotate(90deg)";
    proPlayer.style.top = '8%';
    isVisible = true;
    playAudio()
})

function visiblePlayer() {
    if (!isVisible) {
        proPlayerBtn.style.top = "15%";
        proPlayerBtn.style.transform = "translate(-50%) rotate(90deg)";
        proPlayer.style.top = '8%';
        isVisible = true;
    } else {
        proPlayerBtn.style.top = '2%';
        proPlayerBtn.style.transform = "translate(-50%) rotate(270deg)";
        proPlayer.style.top = '-5%';
        isVisible = false;
    }
}

function volume() {
    audio.volume = volumeLength.value / 100
}

function volumeOnOff() {
    if (isVolume) {
        playerIcon.style.opacity = '.3';
        audio.volume = 0;
        volumeLength.value = 0;
        isVolume = false;
    } else {
        playerIcon.style.opacity = '.8';
        audio.volume = 0.5;
        volumeLength.value = 50;
        isVolume = true;
    }
}

playNext.addEventListener('click', audioNext)
playPrev.addEventListener('click', audioPrev)
proPlayBtn.addEventListener('click', playAudio)
proPlayNext.addEventListener('click', audioNext)
proPlayPrev.addEventListener('click', audioPrev)
audio.addEventListener('timeupdate', audioTime)
audioLength.addEventListener('input', rewind)
proPlayerBtn.addEventListener('click', visiblePlayer)
volumeLength.addEventListener('input', volume)
playerIcon.addEventListener('click', volumeOnOff)

