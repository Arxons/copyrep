const body = document.querySelector('body'),
    nextSlide = document.querySelector('.slide-next'),
    prevSlide = document.querySelector('.slide-prev');

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result < 10) {
        return result = `0${result}`
    } else return result
}
let randomNum = getRandom(1, 20);

function setBg() {
    const img = new Image()
    const timeOfDay = showGretting();
    img.src = `https://raw.githubusercontent.com/Arxons/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.webp`
    img.onload = () => {
        body.style.backgroundImage = `url(https://raw.githubusercontent.com/Arxons/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.webp)`
    };
}

setBg()

function getNextSlide() {
    if (Number.parseInt(randomNum) !== 20 && Number.parseInt(randomNum) < 9) {
        randomNum++;
        randomNum = `0${JSON.stringify(randomNum)}`
    } else if (Number.parseInt(randomNum) !== 20 && Number.parseInt(randomNum) < 20) {
        randomNum++;
    } else randomNum = '01';
    setBg()
}

function getPrevSlide() {
    if (Number.parseInt(randomNum) !== 1 && Number.parseInt(randomNum) < 11) {
        randomNum--;
        randomNum = `0${JSON.stringify(randomNum)}`
    } else if (Number.parseInt(randomNum) !== 1 && Number.parseInt(randomNum) > 9) {
        randomNum--;
    } else randomNum = '20';
    setBg()
}

nextSlide.addEventListener('click', getNextSlide);
prevSlide.addEventListener('click', getPrevSlide);

setInterval(getNextSlide, 30000)