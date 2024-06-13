// Function to fetch and display weather data
function getWeather() {
    // API key for OpenWeatherMap
    const apiKey = "6273928bc4b2e7b23a77f782e44b2b24";
    // City for which to fetch the weather
    const city = "Senmonourom";

    // URL to fetch the current weather data
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    // Fetch current weather data from the API
    fetch(currentWeatherUrl)
        .then(response => response.json())  // Parse the JSON response
        .then(data => {
            displayWeather(data);  // Call function to display the weather data
        })
        .catch(error => {
            // Handle errors during fetch
            console.error('Error fetching current weather data:', error);
            alert('Error fetching current weather data. Please try again');
        });
}

// Function to update the webpage based on the weather data
function displayWeather(data) {
    // Extract weather type and temperature from the API response
    const weatherType = data.weather[0].main;
    const temperature = data.main.temp;

    // Determine the appropriate weather icon based on the weather type
    let weatherIconPath = '';
    if (weatherType === "Clear") {
        weatherIconPath = "../../public/images/weathericons/Sunny.svg";
    } else if (weatherType === "Clouds") {
        weatherIconPath = "../../public/images/weathericons/Cloudy.svg";
        weatherIconPath.style
    } else if (weatherType === "Storm") {
        weatherIconPath = "../../public/images/weathericons/Stormy.svg";
    } else if (weatherType === "Rain") {
        weatherIconPath = "../../public/images/weathericons/Rainy.svg";
    }

    // Determine the appropriate temperature icon based on the temperature
    let temperatureIconPath = '';
    if (temperature > 35) {
        temperatureIconPath = "../../public/images/weathericons/Hot.svg";
    } else if (temperature > 30) {
        temperatureIconPath = "../../public/images/weathericons/Warm.svg";
    } else {
        temperatureIconPath = "../../public/images/weathericons/Cold.svg";
    }

    // Update the weather icon on the webpage
    document.getElementById('weatherIcon').src = weatherIconPath;
    document.getElementById('weatherIcon').style.display = 'inline-block';

    // Update the temperature icon on the webpage
    document.getElementById('temperatureIcon').src = temperatureIconPath;
    document.getElementById('temperatureIcon').style.display = 'inline-block';

    // Update the status header with the current temperature and weather type
    document.getElementById('statusHeader').innerText = `Temperature is ${temperature} degrees Celsius, weather is ${weatherType}`;
}

// Call the getWeather function to fetch and display weather data when the page loads
getWeather();