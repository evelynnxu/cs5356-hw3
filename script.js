document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetch-weather").addEventListener("click", fetchNewYorkWeather);
});

function fetchNewYorkWeather() {
    // Open-Meteo API: Get real-time weather for New York
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true&timezone=America/New_York")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network error: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log("New York Weather Data:", data); // ✅ Check data in the console

            // Parse weather data
            const temperature = data.current_weather.temperature; // Temperature (°C)
            const windspeed = data.current_weather.windspeed; // Wind speed (km/h)
            const weathercode = data.current_weather.weathercode; // Weather code

            // Convert weather code to description
            const weatherDescription = getWeatherDescription(weathercode);

            // Update HTML page
            document.getElementById("weather-container").innerHTML = `
                <div class="weather-card">
                    <h2>Current Weather in New York</h2>
                    <p>Temperature: ${temperature}°C</p>
                    <p>Wind Speed: ${windspeed} km/h</p>
                    <p>Weather Condition: ${weatherDescription}</p>
                </div>
            `;
        })
        .catch(error => {
            console.error("Failed to fetch weather:", error);
            document.getElementById("weather-container").innerHTML = `<p>⚠️ Failed to fetch weather, please try again later.</p>`;
        });
}

// Convert Open-Meteo API weather codes to readable text
function getWeatherDescription(code) {
    const weatherDescriptions = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Dense fog",
        51: "Light drizzle",
        53: "Moderate drizzle",
        55: "Heavy drizzle",
        61: "Light rain",
        63: "Moderate rain",
        65: "Heavy rain",
        80: "Light showers",
        81: "Moderate showers",
        82: "Heavy showers",
        95: "Thunderstorm",
        96: "Thunderstorm with light hail",
        99: "Thunderstorm with heavy hail"
    };
    return weatherDescriptions[code] || "Unknown weather";
}


