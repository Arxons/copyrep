const slides = document.querySelectorAll('.slide'),
    right = document.querySelector('.right'),
    left = document.querySelector('.left'),
    squares = document.querySelectorAll('.square'),
    picNumber = document.querySelector('.pic-num');

let slidesIndex = 0;

//Function that removes all active and add last to index
const activePic = (val) => {
    console.log(val);
    slides.forEach(elem => elem.classList.remove('active')); //pictures
    squares.forEach(elem => elem.classList.remove('active')); //squares on pannel    
    slides[val].classList.add('active'); //pictures
    squares[val].classList.add('active'); //squares on pannel    
}

//swipe anim to pics
const rightSwipe = (val) => {
    slides.forEach(elem => elem.classList.remove('left'));
    slides.forEach(elem => elem.classList.remove('right'));
    slides[val].classList.add('right');
    slides[val + 2].classList.add('left');

}

//swipe anim to pics
const leftSwipe = val => {
    slides.forEach(elem => elem.classList.remove('left'));
    slides.forEach(elem => elem.classList.remove('right'));
    slides[val].classList.add('left');
    slides[val - 2].classList.add('right');
}

const clickOnSquare = () => {
    slides.forEach(elem => elem.classList.remove('left'));
    slides.forEach(elem => elem.classList.remove('right'));
}

//Function that swipe to next picture
const nextPic = () => {
    if (slidesIndex !== slides.length - 1) {
        slidesIndex += 1;
        picNumber.innerHTML = `0${slidesIndex + 1}`;
        activePic(slidesIndex);
        rightSwipe(slidesIndex - 1);
    } else {
        slidesIndex = 0;
        picNumber.innerHTML = `0${slidesIndex + 1}`;
        activePic(slidesIndex);
        rightSwipe(slides.length - 1);
    }
}

//Function that swipe to previos picture
const prevPic = () => {
    if (slidesIndex !== 0) {
        slidesIndex -= 1;
        picNumber.innerHTML = `0${slidesIndex + 1}`
        activePic(slidesIndex);
        leftSwipe(slidesIndex + 1);
    } else {
        slidesIndex = 4;
        picNumber.innerHTML = `0${slidesIndex + 1}`;
        activePic(slidesIndex);
        leftSwipe(0);
    }
}

right.addEventListener('click', nextPic, rightSwipe);
left.addEventListener('click', prevPic, leftSwipe);

//change pic by click on square
squares.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        slidesIndex = i;
        activePic(i);
        clickOnSquare()
        picNumber.innerHTML = `0${i + 1}`;
    })
})


//swipes for mouse
const curSlide = document.querySelector('.welcome-slider');
curSlide.addEventListener('mousedown', clickOn, false);
curSlide.addEventListener('mouseup', mouseMove, false);

let posInit = null;

function clickOn(event) {
    event = event || window.event;
    posInit = event.offsetX;
}


function mouseMove(event) {
    if (!posInit) return false
    event = event || window.event;
    let posX = posInit - event.offsetX;
    console.log(posX)

    if (posX > 100) {
        nextPic()
    } else if (posX < -100) {
        prevPic();
    }
    posX = null;
    posInit = null;
}


//swipes for touches
curSlide.addEventListener('touchstart', touchOn, false);
curSlide.addEventListener('touchend', touchMove, false);


function touchOn(event) {
    event = event || window.event;
    posInit = event.changedTouches[0].clientX;
    console.log(posInit)
}


function touchMove(event) {
    if (!posInit) return false
    event = event || window.event;
    let posX = posInit - event.changedTouches[0].clientX;
    console.log(posX)

    if (posX > 100) {
        nextPic()
    } else if (posX < -100) {
        prevPic();
    }
    posX = null;
}

