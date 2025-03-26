import { useEffect } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import { getForecastWeatherData, getWeatherData } from "../services/ApiService";
import CurrentWeatherDataCombo from "./CurrentWeatherDataCombo";
import SearchModule from "./SearchModule";

export default function Dashboard() {

  const {
    isLoaded,
    city,
    country,
    coordinates,

    setForecastWeatherData,
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

  useEffect(() => {

    const getForecastWeather = async () => {

      const forecastWeatherResponse = await getForecastWeatherData();
      setForecastWeatherData(forecastWeatherResponse.list);
      setCity(forecastWeatherResponse.city.name);
      setCoordinates(forecastWeatherResponse.city.coord);
      setCountry(forecastWeatherResponse.city.country);
      setIsLoaded(true);

    }

    const getCurrentWeather = async () => {

      const currentWeatherResponse = await getWeatherData();
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

    getForecastWeather();
    getCurrentWeather();

  }, [])




  return (
    <>
      {
        isLoaded ?
          <div>
            <div className="datalist container">
              <h1>Meteorological Data for {city}, {country}</h1>
              <h3>Coordinates ( X: {coordinates?.lon} Y: {coordinates?.lat} )</h3>
              <SearchModule />
              <div className="row">
                <div className="col-12 text-center h2">
                  Current Weather Conditions
                  <hr />
                </div>
                <CurrentWeatherDataCombo />
              </div>
            </div>
            <div>
              <footer className="m-2 text-center">
                <p className="text-center">Web App developed by Vicent García</p>
                <p className="text-center"> Powered by <a href="https://reactjs.org/">ReactJS</a> and <a href="https://getbootstrap.com/"> Bootstrap 5</a></p>
                <p className="text-center mb-2">Data Source: <a href="https://openweathermap.org">OpenWeatherMap API</a></p>
              </footer>
            </div>
          </div>
          :
          <div><p className="text-center mt-20">Loading Data...</p></div>
      }
    </>
  )
}
