const greeting = document.querySelector('.greeting'),
    userName = document.querySelector('.name');

function showGretting() {
    const date = new Date();
    const takeHours = date.getHours();
    let dayTime = null;

    takeHours >= 0 && takeHours < 6 ? dayTime = 'Night' :
        takeHours >= 6 && takeHours < 12 ? dayTime = 'Mornig' :
            takeHours >= 12 && takeHours < 18 ? dayTime = 'Afternoon' :
                takeHours >= 18 ? dayTime = 'Evening' : takeHours;

    greeting.textContent = `Good ${dayTime},`
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
userName.addEventListener('click', () => userName.placeholder = '');
showGretting()