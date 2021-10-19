const greeting = document.querySelector('.greeting'),
    userName = document.querySelector('.name');

function showGretting() {
    const date = new Date();
    const takeHours = date.getHours();
    let dayTime = null;
    console.log(takeHours)

    takeHours >= 0 && takeHours < 6 ? dayTime = 'night' :
        takeHours >= 6 && takeHours < 12 ? dayTime = 'mornig' :
            takeHours >= 12 && takeHours < 18 ? dayTime = 'day' :
                takeHours >= 18 ? dayTime = 'evening' : takeHours;

    greeting.textContent = `Good ${dayTime},`
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