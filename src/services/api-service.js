
const baseUrl = 'https://polibackend.onrender.com';

export async function getForecastWeatherData() {
    // Llamada al backend 
    const response = await fetch(`${baseUrl}/meteodashboard/forecast`);
    const responseJson = await response.json();
    return responseJson;
}

export async function getWeatherData() {
    const response = await fetch(`${baseUrl}/meteodashboard/weatherData`);
    const responseJson = await response.json();
    return responseJson;
}

export async function getSearchForecastWeatherData(q) {
    const response = await fetch(`${baseUrl}/meteodashboard/searchForecast/${q}`);
    const responseJson = await response.json();
    return responseJson;
}

export async function getSearchWeatherData(q) {
    const response = await fetch(`${baseUrl}/meteodashboard/searchWeather/${q}`);
    const responseJson = await response.json();
    return responseJson;
}

export default {
    getForecastWeatherData,
    getWeatherData,
    getSearchForecastWeatherData,
    getSearchWeatherData
}
