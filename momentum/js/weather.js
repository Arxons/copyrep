const weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    weatherDescription = document.querySelector('.weather-description'),
    wind = document.querySelector('.wind'),
    humidity = document.querySelector('.humidity'),
    city = document.querySelector('.city');

city.value = localStorage.getItem('cityValue')

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${languages.weather.lang}&appid=1a5d60d68f8efbc7da2cbc49ee745da3&units=metric`
    const response = await fetch(url)
    const data = await response.json();
    if (response.ok) {
        weatherIcon.classList.add(`owf-${data.weather[0].id}`)
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        temperature.style.color = '#fff'
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${languages.weather.windSpeed}: ${Math.floor(data.wind.speed)} ${languages.weather.units}`;
        humidity.textContent = `${languages.weather.humidity}: ${Math.floor(data.main.humidity)}%`
        city.style.borderBottom = '1px solid #fff'
        localStorage.setItem('cityValue', city.value)

    } else {
        city.style.borderBottom = '1px solid red';
        city.value = '';
        temperature.textContent = `Error: invalid value! Please try again`
        temperature.style.color = 'red'
        weatherDescription.textContent = ''
        wind.textContent = ``
        humidity.textContent = ``
    }
}

city.addEventListener('change', getWeather)

window.addEventListener('DOMContentLoaded', () => {
    if (city.value == undefined || city.value == '') {
        city.value = 'Minsk'
    }
    getWeather()

})