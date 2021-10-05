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

const rightSwipe = (val) => {
    slides.forEach(elem => elem.classList.remove('left'));
    slides.forEach(elem => elem.classList.remove('right'));
    slides[val].classList.add('right');
    slides[val + 2].classList.add('left');

}

const leftSwipe = val => {
    slides.forEach(elem => elem.classList.remove('left'));
    slides.forEach(elem => elem.classList.remove('right'));
    slides[val].classList.add('left');
    slides[val - 2].classList.add('right');
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
        picNumber.innerHTML = `0${i + 1}`;
    })
})

console.log(slidesIndex)
