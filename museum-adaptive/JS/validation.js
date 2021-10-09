const emailForm = document.querySelector('.form__email'),
    nameForm = document.querySelector('.form__text'),
    numberForm = document.querySelector('.form__tel'),
    dateForm = document.querySelector('.form__date'),
    timeForm = document.querySelector('.form__time'),
    choosenDate = document.querySelector('.date'),
    choosenTime = document.querySelector('.time'),
    invalid = document.querySelectorAll('.invalid')

function validateEmail(email) {
    return /^[A-za-z0-9_-]+@[\w-]+\.[com]{3,15}$/i.test(email.value);
}

function validateName(name) {
    return /^[a-zA-Zа-яА-Я0-9\ ]{3,15}$/.test(name.value)
}

function validateNumber(number) {
    return /^\d[\d\ -]{0,14}\d$/.test(number.value)
}

nameForm.addEventListener('input', () => {
    if (!validateName(nameForm)) {
        nameForm.classList.add('_error');
        invalid[0].style.opacity = '1';

    } else {
        nameForm.classList.remove('_error')
        invalid[0].style.opacity = '0';
    }
})

emailForm.addEventListener('input', () => {
    if (!validateEmail(emailForm)) {
        emailForm.classList.add('_error');
        invalid[1].style.opacity = '1';

    } else {
        emailForm.classList.remove('_error')
        invalid[1].style.opacity = '0';
    }
})

numberForm.addEventListener('input', () => {
    if (!validateNumber(numberForm)) {
        numberForm.classList.add('_error');
        invalid[2].style.opacity = '1';

    } else {
        numberForm.classList.remove('_error');
        invalid[2].style.opacity = '0';
    }
})

dateForm.addEventListener('click', () => {
    const startDate = new Date();
    Number.parseInt(startDate.getDate()) < 10 ?
        dateForm.min = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-0${startDate.getDate()}` :
        dateForm.min = `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`
});

dateForm.addEventListener('change', () => {
    const selectedDate = new Date(Date.parse(dateForm.value));
    const day = selectedDate.getDay();
    const month = selectedDate.getMonth();
    const currentDate = selectedDate.getDate();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    choosenDate.innerHTML = `${daysOfWeek[day]}, ${monthOfYear[month]}, ${currentDate}`
})

timeForm.addEventListener('change', () => {
    choosenTime.innerHTML = `${timeForm.value}`
    console.log(formSelect.value)
})