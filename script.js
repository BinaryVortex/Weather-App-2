async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'fd2efc81bdf24ebb8a7153138240807'; // Your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.error) {
            alert('City not found');
            return;
        }

        const weatherIcon = document.getElementById('weather-icon');
        const temperature = document.getElementById('temperature');
        const cityName = document.getElementById('city-name');
        const humidity = document.getElementById('humidity');
        const windSpeed = document.getElementById('wind-speed');

        weatherIcon.src = `https:${data.current.condition.icon}`;
        temperature.innerText = `${data.current.temp_c}°C`;
        cityName.innerText = data.location.name;
        humidity.innerText = `Humidity: ${data.current.humidity}%`;
        windSpeed.innerText = `Wind Speed: ${data.current.wind_kph} km/h`;
    } catch (error) {
        alert('Error fetching weather data');
    }
}
