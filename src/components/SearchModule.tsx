import { useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { getSearchForecastWeatherData, getSearchWeatherData } from "../services/ApiService";


export default function SearchModule() {

    const {
        setCity,
        setCoordinates,
        setCountry,
        setCurrentTemp,
        setMaxTemp,
        setMinTemp,
        setCurrentPressure,
        setCurrentHum,
        setCurrentWindSpeed,
        setCurrentWindDirection,
        setCurrentClouds,
        setIconUrl,
        setDescription,
        setIsLoaded

    } = useWeatherContext();

    const [ search, setSearch ] = useState('');


    const handleSearch = async () => {


        const getForecastWeather = async (city: string) => {

            const forecastWeatherResponse = await getSearchForecastWeatherData(city);
            setCity(forecastWeatherResponse.city.name);
            setCoordinates(forecastWeatherResponse.city.coord);
            setCountry(forecastWeatherResponse.city.country);
            setIsLoaded(true);

        }

        const getCurrentWeather = async (city: string) => {

            const currentWeatherResponse = await getSearchWeatherData(city);
            setCurrentTemp(currentWeatherResponse.main.temp);
            setMaxTemp(currentWeatherResponse.main.temp_max);
            setMinTemp(currentWeatherResponse.main.temp_min);
            setCurrentPressure(currentWeatherResponse.main.pressure);
            setCurrentHum(currentWeatherResponse.main.humidity);
            setCurrentWindSpeed(currentWeatherResponse.wind.speed);
            setCurrentWindDirection(currentWeatherResponse.wind.deg);
            setCurrentClouds(currentWeatherResponse.clouds.all);
            setIconUrl(currentWeatherResponse.weather[0].icon);
            setDescription(currentWeatherResponse.weather[0].description);
        }

        Promise.all([getForecastWeather(search), getCurrentWeather(search)]);

    }

    const handleChange = (e: any) => setSearch(e.target.value);

    const resetSearch = () => setSearch('');


    return (

        <div className="mb-3 text-center">
            <input className= "search-input m-2" placeholder={'Search for a location e.g: London, GB'} onChange={handleChange} value={search} />
            <button className="btn btn-primary m-2 search-button" onClick={handleSearch}>Search</button>
            <button className='btn btn-secondary m-2 clear-button' onClick={resetSearch}>Clear</button>
        </div>
    )
}
