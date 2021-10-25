const greeting = document.querySelector('.greeting'),
    userName = document.querySelector('.name');

function showGretting(lang) {
    const date = new Date();
    const takeHours = date.getHours();
    let dayTime = null;

    takeHours >= 0 && takeHours < 6 ? dayTime = 'Night' :
        takeHours >= 6 && takeHours < 12 ? dayTime = 'Mornig' :
            takeHours >= 12 && takeHours < 18 ? dayTime = 'Afternoon' :
                takeHours >= 18 ? dayTime = 'Evening' : takeHours;
    if (lang === 'ru') {
        greeting.textContent = `${languages.ru.greeting},`
        userName.placeholder = 'Введите Имя'
    } else if (lang === 'en') {
        greeting.textContent = `Good ${dayTime},`
        userName.placeholder = 'Enter Name'
    }
    return dayTime.toLowerCase();
}

function putUserName() {
    localStorage.setItem('userName', userName.value)
}

function getUserName() {
    if (localStorage.getItem('userName')) {
        userName.value = localStorage.getItem('userName');
    }
}

window.addEventListener('beforeunload', putUserName);
window.addEventListener('load', getUserName);

showGretting('en')

