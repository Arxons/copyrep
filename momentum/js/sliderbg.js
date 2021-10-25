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
let isGit = true;
let isUnsplash = false;
let isFlickr = false;

function setBg() {
    const img = new Image()
    const timeOfDay = showGretting();
    img.src = `https://raw.githubusercontent.com/Arxons/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.webp`
    img.onload = () => {
        body.style.backgroundImage = `url(${img.src})`;
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
    if (isGit) {
        setBg()
    } else if (isUnsplash) {
        getPhotosUnsplash()
    } else if (isFlickr) {
        getPhotosFlickr()
    }
}

function getPrevSlide() {
    if (Number.parseInt(randomNum) !== 1 && Number.parseInt(randomNum) < 11) {
        randomNum--;
        randomNum = `0${JSON.stringify(randomNum)}`
    } else if (Number.parseInt(randomNum) !== 1 && Number.parseInt(randomNum) > 9) {
        randomNum--;
    } else randomNum = '20';
    if (isGit) {
        setBg()
    } else if (isUnsplash) {
        getPhotosUnsplash()
    } else if (isFlickr) {
        getPhotosFlickr()
    }
}

nextSlide.addEventListener('click', getNextSlide);
prevSlide.addEventListener('click', getPrevSlide);

// setInterval(getNextSlide, 30000)


//Unsplash API
async function getPhotosUnsplash() {
    const timeOfDay = showGretting();
    const url = `https://api.unsplash.com/photos/random?query=landscape-${timeOfDay}&client_id=9A2lMsA_bZGegBQ0dAiyaKvX4lJhHy2uqvPzguyFPA4`
    const resp = await fetch(url)
    if (resp.ok) {
        const data = await resp.json()
        const img = new Image()
        img.src = data.urls.regular
        img.addEventListener('load', () => {
            body.style.backgroundImage = `url(${img.src})`
        })
    } else {
        const status = resp.status;
        throw new Error(`Error: ${status}`)
    }
}

// getPhotosUnsplash()

//flikr API
async function getPhotosFlickr() {
    const timeOfDay = showGretting();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=fda7c295a778e6318613c6f5086c0c7f&tags=${timeOfDay}&extras=url_h&format=json&nojsoncallback=1`
    const resp = await fetch(url);
    if (resp.ok) {
        const data = await resp.json();
        const img = new Image();
        img.src = data.photos.photo[Number.parseInt(randomNum)].url_h
        img.addEventListener('load', () => {
            body.style.backgroundImage = `url(${img.src})`
        })
    } else {
        const status = resp.status;
        throw new Error(`Error: ${status}`)
    }
}

// getPhotosFlickr()