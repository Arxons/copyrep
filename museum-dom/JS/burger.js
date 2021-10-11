const burgerButton = document.getElementById('burger__nav');
const titleWelcome = document.querySelector('.title-welcome');

let counter = 0;

function openClose() {
    if (counter === 0) {
        burgerButton.className = 'open';
        burgerButton.href = '#burger'
        titleWelcome.className = 'title-welcome__hide'
        counter = 1;
    } else {
        burgerButton.className = '';
        burgerButton.href = '#'
        titleWelcome.className = 'title-welcome'
        counter = 0;
    }
}