const languages = {
    'ru': {
        'greeting': `${greet()} ${timeOfDay()}`
    },
    'dateTime': dateTimeLanguage(`${'en'}`),
    'quotes': getQuotesLang(`${'en'}`),
    'weather': getWeatherLang(`${'en'}`)
}

function timeOfDay() {
    const date = new Date();
    const takeHours = date.getHours();
    let dayTime = null;

    takeHours >= 0 && takeHours < 6 ? dayTime = 'Ночи' :
        takeHours >= 6 && takeHours < 12 ? dayTime = 'День' :
            takeHours >= 12 && takeHours < 18 ? dayTime = 'Утро' :
                takeHours >= 18 ? dayTime = 'Вечер' : takeHours;

    return dayTime
}

function greet() {
    const date = new Date();
    const takeHours = date.getHours();
    let dayTime = null;

    takeHours >= 0 && takeHours < 6 ? dayTime = 'Доброй' :
        takeHours >= 6 && takeHours < 12 ? dayTime = 'Добрый' :
            takeHours >= 12 && takeHours < 18 ? dayTime = 'Доброе' :
                takeHours >= 18 ? dayTime = 'Добрый' : takeHours;

    return dayTime
}

function dateTimeLanguage(lang) {
    if (lang == 'ru') {
        return 'ru-RU'
    } else if (lang == 'en') {
        return 'en-US'
    }
}

function getQuotesLang(lang) {
    let quotesPuth = null;
    if (lang == 'ru') {
        quotesPuth = './js/quotesru.json'
    } else if (lang == 'en') {
        quotesPuth = './js/quotes.json'
    }
    return quotesPuth
}

function getWeatherLang(lang) {
    let objWeather = {}
    if (lang == 'ru') {
        objWeather = {
            'lang': 'ru',
            'humidity': 'Влажность',
            'windSpeed': 'Скорость ветра',
            'units': 'м/с'
        }
    } else if (lang == 'en') {
        objWeather = {
            'lang': 'en',
            'humidity': 'Humidity',
            'windSpeed': 'Wind speed',
            'units': 'm/s'
        }
    }
    return objWeather
}


