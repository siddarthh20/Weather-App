// Function to fetch weather data from OpenWeatherMap API
async function myfunc() {
    const city = document.getElementById('cityInput').value;

    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    const apiKey = "da176ca70e167c769ab3d64361bf1e1c";  // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please try again.");
            return;
        }

        // Update weather data in the HTML
        document.getElementById('temp').textContent = `${data.main.temp} °C`;
        document.getElementById('humidity').textContent = `${data.main.humidity} %`;
        document.getElementById('tempMax').textContent = `${data.main.temp_max} °C`;
        document.getElementById('tempMin').textContent = `${data.main.temp_min} °C`;

        // Update weather icon
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        document.getElementById('weatherIcon').src = iconUrl;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Failed to retrieve weather data. Please try again later.");
    }
}
