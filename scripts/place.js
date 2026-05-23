// Single-line function to calculate Wind Chill in Celsius
const calculateWindChill = (t, v) => (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);

document.addEventListener("DOMContentLoaded", () => {
    // Select elements from the HTML
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const chillElement = document.getElementById("chill");

    const temperature = parseFloat(tempElement.textContent);
    const windSpeed = parseFloat(windElement.textContent);

    // Condition limits: Temp <= 10°C AND Wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        chillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
        chillElement.textContent = "N/A";
    }

    // Current year and last modification date
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});