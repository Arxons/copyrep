const welc = document.querySelector('.title-welcome'),
    mainTitle = document.querySelector('.main-title'),
    mainInfo = document.querySelector('.main-title-info'),
    welcomeBtn = document.querySelector('.button-text');



document.addEventListener('DOMContentLoaded', welcomeAnim);

function welcomeAnim() {
    mainTitle.style.transform = `translate(0, 0)`;
    mainTitle.style.opacity = `1`;

    setTimeout(() => {
        mainInfo.style.transform = `translate(0, 0)`;
        mainInfo.style.opacity = `1`;
    }, 200)

    setTimeout(() => {
        welcomeBtn.style.transform = `scale(1)`;
        welcomeBtn.style.opacity = `1`;
    }, 1000)

}