const viewtime = document.querySelector('.time'),
    viewDate = document.querySelector('.date');

function showTime() {
    const date = new Date();
    const options = {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }
    const currentTime = date.toLocaleTimeString();
    const currentDate = date.toLocaleDateString('en-US', options);
    viewtime.textContent = currentTime;
    viewDate.textContent = currentDate;
    setTimeout(showTime, 1000);
}

showTime();