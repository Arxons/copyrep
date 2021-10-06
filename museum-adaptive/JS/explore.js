const cont = document.querySelector('.before-after');
const before = document.querySelector('.before');
const changer = document.querySelector('.img-changer')

function changePic(event) {
    event = event || window.event;
    let posX = event.clientX - cont.offsetLeft;

    before.style.width = `${posX}px`;
    changer.style.left = `${posX}px`
};


// for desktop
function onClick() {
    cont.addEventListener('mousemove', changePic);
};

function remover() {
    cont.removeEventListener('mousemove', changePic);
};

changer.addEventListener('mousedown', onClick);

changer.addEventListener('mouseup', remover);


//for mobile
function changePicTouch(event) {
    event = event || window.event;
    let posX = event.changedTouches[0].clientX - cont.offsetLeft;

    before.style.width = `${posX}px`;
    changer.style.left = `${posX}px`
};

function onTouch() {
    cont.addEventListener('touchmove', changePicTouch);
};

function removerTouch() {
    cont.removeEventListener('touchmove', changePicTouch);
};

changer.addEventListener('touchstart', onTouch);

changer.addEventListener('touchend', removerTouch);

