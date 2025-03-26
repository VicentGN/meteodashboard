/**
 * Gets the forecast weather data from the API
 * 
 * @returns A JSON object containing the forecast weather data
 */
export async function getForecastWeatherData() {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/meteodashboard/forecast`);
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error)
    }
}

/**
 * Fetches the current weather data from the API.
 *
 * @returns A JSON object containing the current weather data.
 * @throws Will log an error message to the console if the fetch request fails.
 */

export async function getWeatherData() {
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/meteodashboard/weatherData`);
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(error)
    }
}


/**
 * Gets the forecast weather data from the API by searching for a specific location.
 * 
 * @param {string} q - The location to search for.
 * @returns A JSON object containing the forecast weather data.
 * @throws Will log an error message to the console if the fetch request fails.
 */
export async function getSearchForecastWeatherData(q: string) {
    try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/meteodashboard/searchForecast/${q}`);
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error)
    }
}

/**
 * Gets the current weather data from the API by searching for a specific location.
 *
 * @param {string} q - The location to search for.
 * @returns A JSON object containing the current weather data.
 * @throws Will log an error message to the console if the fetch request fails.
 */
export async function getSearchWeatherData(q: string) {
    try {

        const response = await fetch(`${import.meta.env.VITE_API_URL}/meteodashboard/searchWeather/${q}`);
        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        console.error(error)
    }
}

export default {
    getForecastWeatherData,
    getWeatherData,
    getSearchForecastWeatherData,
    getSearchWeatherData
}