const viewTime = document.querySelector('.time'),
    viewDate = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const currentTime = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString(`${languages.dateTime}`, options);
    viewTime.textContent = currentTime;
    viewDate.textContent = currentDate;
    setTimeout(showTime, 1000);

}

showTime('ru');