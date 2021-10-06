const cont = document.querySelector('.before-after');
const before = document.querySelector('.before');
const changer = document.querySelector('.img-changer')

function changePic(event) {
    event = event || window.event;
    let posX = event.clientX - cont.offsetLeft;

    before.style.width = `${posX}px`;
    changer.style.left = `${Math.floor((posX * 100) / 720)}%`
};

function onClick() {
    cont.addEventListener('mousemove', changePic);
};

function remover() {
    cont.removeEventListener('mousemove', changePic);
};

changer.addEventListener('mousedown', onClick);

changer.addEventListener('mouseup', remover);

