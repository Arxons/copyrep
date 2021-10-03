const progress = document.querySelector('.progress-bar');
const progressTop = document.querySelector('.progress-bar__top')

progress.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
});

progressTop.addEventListener('input', function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`
});

const width = screen.width;

const progress_volume = document.querySelector('.progress-bar-vol');
progress_volume.addEventListener('input', function () {
    const value = this.value;
    const icon_volume = document.getElementById('icon-vol');
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
    if (width > 750) {
        value == 0 ? icon_volume.style.backgroundImage = `url(images/video/volume.svg), url(images/video/novolume.svg)` :
            value <= 20 ? icon_volume.style.backgroundImage = `url(images/video/volume.svg)` :
                value > 20 && value <= 50 ? icon_volume.style.backgroundImage = `url(images/video/volume.svg), url(images/video/volume1.svg)` :
                    icon_volume.style.backgroundImage = `url(images/video/volume.svg), url(images/video/volume1.svg), url(images/video/volume2.svg)`
    }
});

function volumeOnOff(value) {
    const icon_volume = document.getElementById('icon-vol');
    const progressBar = document.getElementById('progress')
    value = Number.parseInt(progressBar.value)
    if (value != 0) {
        icon_volume.style.backgroundImage = `url(images/video/volume.svg), url(images/video/novolume.svg)`
        progressBar.style.background = `#fff`
        progressBar.value = "0";
    } else if (value == 0) {
        progressBar.style.background = `linear-gradient(to right, #710707 0%, #710707 ${51}%, #fff ${51}%, white 100%)`
        icon_volume.style.backgroundImage = `url(images/video/volume.svg), url(images/video/volume1.svg), url(images/video/volume2.svg)`
        progressBar.value = "51";
    }
}

