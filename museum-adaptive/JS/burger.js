const burgerOpen = document.getElementById('open');
const burgerClose = document.getElementById('close');
const burgerButton = document.getElementById('open')
const burgerButtonOpen = document.querySelector('.open')
const burgerButtonClose = document.querySelector('.close')

let counter = 1;

function openClose() {
    if (counter === 1) {
        burgerButton.style.width = '32px';
        burgerButton.style.height = '25px';
        burgerButton.href = '#burger';
        burgerButtonOpen.className = 'close';
        counter = 0;
    } else {
        burgerButton.style.width = '32px';
        burgerButton.style.height = '25px';
        burgerButton.href = '#';
        burgerButtonOpen.className = 'open';
        counter = 1;
    }
}