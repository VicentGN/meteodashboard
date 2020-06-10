
const baseUrl = 'https://api.openweathermap.org/data/2.5';
const defaultValue = 'Valencia'
const apiKey = 'd7c1d7406310d2af6b93a148f3fd2040'

export async function getForecastWeatherData() {
    const response = await fetch(`${baseUrl}/forecast?q=${defaultValue}&units=metric&APPID=${apiKey}`);
    const responseJson = await response.json();
    return responseJson;
}

export async function getWeatherData() {
    const response = await fetch(`${baseUrl}/weather?q=${defaultValue}&units=metric&APPID=${apiKey}`);
    const responseJson = await response.json();
    return responseJson;
}

export async function getSearchForecastWeatherData(q) {
    const response = await fetch(`${baseUrl}/forecast?q=${q}&units=metric&APPID=${apiKey}`);
    const responseJson = await response.json();
    return responseJson;
}

export async function getSearchWeatherData(q) {
    const response = await fetch(`${baseUrl}/weather?q=${q}&units=metric&APPID=${apiKey}`);
    const responseJson = await response.json();
    return responseJson;
}

export default {
    getForecastWeatherData,
    getWeatherData,
    getSearchForecastWeatherData,
    getSearchWeatherData
}
