const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const weatherCity = document.querySelector('.city');


async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity.value}&lang=ru&appid=9bad5167fbce14b51813f8b82f8e5685&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    temperature.textContent = `${data.main.temp}°C`;
    weatherDescription.textContent = data.weather[0].description;

    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
}
getWeather()

weatherCity.addEventListener('change', () => {
    getWeather();
});