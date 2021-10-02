const burgerButton = document.getElementById('open');
const burgerButtonOpen = document.querySelector('.open');
const titleWelcome = document.querySelector('.title-welcome');

let counter = 1;

function openClose() {
    if (counter === 1) {
        burgerButton.href = '#burger';
        burgerButtonOpen.className = 'close';
        titleWelcome.className = 'title-welcome__hide'
        counter = 0;
    } else {
        burgerButton.href = '#';
        burgerButtonOpen.className = 'open';
        titleWelcome.className = 'title-welcome'
        counter = 1;
    }
}