document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("fetch-weather").addEventListener("click", fetchNewYorkTemperature);
});

function fetchNewYorkTemperature() {
    fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7128&longitude=-74.0060&current_weather=true&timezone=America/New_York")
        .then(response => response.json())  // 解析 JSON
        .then(data => {
            console.log("纽约天气数据:", data);  // ✅ 在 Console 里检查数据

            const temperature = data.current_weather.temperature; // 纽约气温 (°C)

            // 更新 HTML 页面
            document.getElementById("weather-container").innerHTML = `
                <h2>Current Temperature at NYC：${temperature}°C</h2>
            `;
        })
        .catch(error => {
            console.error("Failed to Acquire:", error);
            document.getElementById("weather-container").innerHTML = `<p>⚠️ Failed to acquire, please try again later.</p>`;
        });
}


