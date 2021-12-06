const settings = document.querySelector('.settings'),
    settingsBtn = document.querySelector('.settings-btn'),
    en = document.querySelector('.en-lang'),
    ru = document.querySelector('.ru-lang'),
    be = document.querySelector('.be-lang'),
    git = document.querySelector('.git'),
    unsplash = document.querySelector('.unsplash'),
    flickr = document.querySelector('.flickr'),
    timeHide = document.querySelector('.time-hide'),
    dateHide = document.querySelector('.date-hide'),
    greetingHide = document.querySelector('.greeting-hide'),
    quoteHide = document.querySelector('.quote-hide'),
    weatherHide = document.querySelector('.weather-hide'),
    playerHide = document.querySelector('.player-hide'),
    divWeather = document.querySelector('.weather'),
    divPlayer = document.querySelector('.player')

let isSetVisible = false;

function showSettings() {
    if (!isSetVisible) {
        settingsBtn.style.bottom = '41%';
        settings.style.bottom = '0';
        isSetVisible = true;
    } else {
        settingsBtn.style.bottom = '5%';
        settings.style.bottom = '-40%';
        isSetVisible = false;
    }
}

let isRu = false;
let isEn = true;
let isTimeVisible = true;
let isDateVisible = true;
let isGreetingVisible = true;
let isQuoteVisible = true;
let isWeatherVisible = true;
let isPlayerVisible = true;

settingsBtn.addEventListener('click', showSettings)

ru.addEventListener('click', () => {
    languages.dateTime = dateTimeLanguage(`${'ru'}`)
    languages.quotes = getQuotesLang(`${'ru'}`)
    languages.weather = getWeatherLang(`${'ru'}`)
    showTime();
    getWeather();
    getQuote();
    showGretting('ru');
    en.style.color = '#fff';
    ru.style.color = 'yellow';
    isRu = true;
    isEn = false;
    localStorage.setItem('isRu', isRu)
    localStorage.setItem('isEn', isEn)
})

en.addEventListener('click', () => {
    languages.dateTime = dateTimeLanguage(`${'en'}`)
    languages.quotes = getQuotesLang(`${'en'}`)
    languages.weather = getWeatherLang(`${'en'}`)
    showTime();
    getWeather();
    getQuote();
    showGretting('en');
    en.style.color = 'yellow';
    ru.style.color = '#fff';
    isRu = false;
    isEn = true;
    localStorage.setItem('isRu', isRu)
    localStorage.setItem('isEn', isEn)
})

unsplash.addEventListener('click', () => {
    getPhotosUnsplash()
    isGit = false;
    isUnsplash = true;
    isFlickr = false;
    git.style.color = '#fff';
    unsplash.style.color = 'yellow';
    flickr.style.color = '#fff';
    localStorage.setItem('isGit', isGit);
    localStorage.setItem('isUnsplash', isUnsplash);
    localStorage.setItem('isFlickr', isFlickr);
});

flickr.addEventListener('click', () => {
    getPhotosFlickr()
    isGit = false;
    isUnsplash = false;
    isFlickr = true;
    git.style.color = '#fff';
    unsplash.style.color = '#fff';
    flickr.style.color = 'yellow';
    localStorage.setItem('isGit', isGit);
    localStorage.setItem('isUnsplash', isUnsplash);
    localStorage.setItem('isFlickr', isFlickr);
})

git.addEventListener('click', () => {
    setBg();
    isGit = true;
    isUnsplash = false;
    isFlickr = false;
    git.style.color = 'yellow';
    unsplash.style.color = '#fff';
    flickr.style.color = '#fff';
    localStorage.setItem('isGit', isGit);
    localStorage.setItem('isUnsplash', isUnsplash);
    localStorage.setItem('isFlickr', isFlickr);
})

window.addEventListener('load', () => {
    isRu = localStorage.getItem('isRu')
    isEn = localStorage.getItem('isEn')
    isGit = localStorage.getItem('isGit');
    isUnsplash = localStorage.getItem('isUnsplash');
    isFlickr = localStorage.getItem('isFlickr');
    isTimeVisible = localStorage.getItem('isTimeVisible')
    isDateVisible = localStorage.getItem('isDateVisible')
    isGreetingVisible = localStorage.getItem('isGreetingVisible')
    isQuoteVisible = localStorage.getItem('isQuoteVisible')
    isWeatherVisible = localStorage.getItem('isWeatherVisible')
    isPlayerVisible = localStorage.getItem('isPlayerVisible')

    if (isRu == 'true') {
        languages.dateTime = dateTimeLanguage(`${'ru'}`)
        languages.quotes = getQuotesLang(`${'ru'}`)
        languages.weather = getWeatherLang(`${'ru'}`)
        showTime();
        getWeather();
        getQuote();
        showGretting('ru');
        en.style.color = '#fff';
        ru.style.color = 'yellow';
    } else if (isRu != 'true') {
        languages.dateTime = dateTimeLanguage(`${'en'}`)
        languages.quotes = getQuotesLang(`${'en'}`)
        languages.weather = getWeatherLang(`${'en'}`)
        showTime();
        getWeather();
        getQuote();
        showGretting('en');
        en.style.color = 'yellow';
        ru.style.color = '#fff';
    }

    if (isGit == 'true') {
        setBg();
        git.style.color = 'yellow';
        unsplash.style.color = '#fff';
        flickr.style.color = '#fff';
    } else if (isUnsplash == 'true') {
        getPhotosUnsplash()
        git.style.color = '#fff';
        unsplash.style.color = 'yellow';
        flickr.style.color = '#fff';
        localStorage.setItem('isGit', isGit);
        localStorage.setItem('isUnsplash', isUnsplash);
        localStorage.setItem('isFlickr', isFlickr);
    } else {
        getPhotosFlickr()
        git.style.color = '#fff';
        unsplash.style.color = '#fff';
        flickr.style.color = 'yellow';
    }

    if (isTimeVisible == 'false') {
        viewTime.style.opacity = '0';
        isTimeVisible = false
        timeHide.style.color = 'yellow';
    } else {
        viewTime.style.opacity = '1';
        isTimeVisible = true;
        timeHide.style.color = '#fff';
    }

    if (isDateVisible == 'false') {
        viewDate.style.opacity = '0';
        isDateVisible = false
        dateHide.style.color = 'yellow';
    } else {
        viewDate.style.opacity = '1';
        isDateVisible = true;
        dateHide.style.color = '#fff';
    }

    if (isGreetingVisible == 'false') {
        greeting.style.opacity = '0';
        userName.style.opacity = '0';
        isGreetingVisible = false
        greetingHide.style.color = 'yellow';
    } else {
        greeting.style.opacity = '1';
        userName.style.opacity = '1';
        isGreetingVisible = true;
        greetingHide.style.color = '#fff';
    }

    if (isQuoteVisible == 'false') {
        quote.style.opacity = '0';
        author.style.opacity = '0';
        changeBtn.style.opacity = '0';
        isQuoteVisible = false
        quoteHide.style.color = 'yellow';
    } else {
        quote.style.opacity = '1';
        author.style.opacity = '1';
        changeBtn.style.opacity = '1';
        isQuoteVisible = true;
        quoteHide.style.color = '#fff';
    }

    if (isWeatherVisible == 'false') {
        divWeather.style.opacity = '0';
        isWeatherVisible = false
        weatherHide.style.color = 'yellow';
    } else {
        divWeather.style.opacity = '1';
        isWeatherVisible = true;
        weatherHide.style.color = '#fff';
    }

    if (isPlayerVisible == 'false') {
        divPlayer.style.opacity = '0';
        isPlayerVisible = false
        playerHide.style.color = 'yellow';
    } else {
        divPlayer.style.opacity = '1';
        isPlayerVisible = true;
        playerHide.style.color = '#fff';
    }
})







timeHide.addEventListener('click', () => {
    if (isTimeVisible) {
        viewTime.style.opacity = '0';
        isTimeVisible = false
        localStorage.setItem('isTimeVisible', isTimeVisible)
        timeHide.style.color = 'yellow';
    } else {
        viewTime.style.opacity = '1';
        isTimeVisible = true;
        localStorage.setItem('isTimeVisible', isTimeVisible)
        timeHide.style.color = '#fff';
    }
})
dateHide.addEventListener('click', () => {
    if (isDateVisible) {
        viewDate.style.opacity = '0';
        isDateVisible = false
        localStorage.setItem('isDateVisible', isDateVisible)
        dateHide.style.color = 'yellow';
    } else {
        viewDate.style.opacity = '1';
        isDateVisible = true;
        localStorage.setItem('isDateVisible', isDateVisible)
        dateHide.style.color = '#fff';
    }
})
greetingHide.addEventListener('click', () => {
    if (isGreetingVisible) {
        greeting.style.opacity = '0';
        userName.style.opacity = '0';
        isGreetingVisible = false
        localStorage.setItem('isGreetingVisible', isGreetingVisible)
        greetingHide.style.color = 'yellow';
    } else {
        greeting.style.opacity = '1';
        userName.style.opacity = '1';
        isGreetingVisible = true;
        localStorage.setItem('isGreetingVisible', isGreetingVisible)
        greetingHide.style.color = '#fff';
    }
})
quoteHide.addEventListener('click', () => {
    if (isQuoteVisible) {
        quote.style.opacity = '0';
        author.style.opacity = '0';
        changeBtn.style.opacity = '0';
        isQuoteVisible = false
        localStorage.setItem('isQuoteVisible', isQuoteVisible)
        quoteHide.style.color = 'yellow';
    } else {
        quote.style.opacity = '1';
        author.style.opacity = '1';
        changeBtn.style.opacity = '1';
        isQuoteVisible = true;
        localStorage.setItem('isQuoteVisible', isQuoteVisible)
        quoteHide.style.color = '#fff';
    }
})
weatherHide.addEventListener('click', () => {
    if (isWeatherVisible) {
        divWeather.style.opacity = '0';
        isWeatherVisible = false
        localStorage.setItem('isWeatherVisible', isWeatherVisible)
        weatherHide.style.color = 'yellow';
    } else {
        divWeather.style.opacity = '1';
        isWeatherVisible = true;
        localStorage.setItem('isWeatherVisible', isWeatherVisible)
        weatherHide.style.color = '#fff';
    }
})
playerHide.addEventListener('click', () => {
    if (isPlayerVisible) {
        divPlayer.style.opacity = '0';
        isPlayerVisible = false
        localStorage.setItem('isPlayerVisible', isPlayerVisible)
        playerHide.style.color = 'yellow';
    } else {
        divPlayer.style.opacity = '1';
        isPlayerVisible = true;
        localStorage.setItem('isPlayerVisible', isPlayerVisible)
        playerHide.style.color = '#fff';
    }
})