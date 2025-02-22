function getWeather() {
    let city = document.getElementById('cityInput').value;
    let apiKey = 'a0b8a41e01edfc3afb8025cd87b1ce3f'; // Replace with your OpenWeatherMap API Key
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                document.getElementById('weatherResult').innerHTML = 
                    `<p><strong>${data.name}</strong>: ${data.weather[0].description}</p>
                     <p>Temperature: ${data.main.temp}°C</p>
                     <p>Humidity: ${data.main.humidity}%</p>`;
            } else {
                document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
            }
        })
        .catch(error => console.error('Error:', error));
}
