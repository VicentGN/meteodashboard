import React from 'react';
import DataSquare from '../data-square'
import DataCombo from '../data-combo'
import Title from '../title'
import Footer from '../footer'
import SearchBar from '../searchBar';
import { getForecastWeatherData, getWeatherData, getSearchForecastWeatherData, getSearchWeatherData } from '../../services/api-service'

/**
 * Renders the Dashboard with Weather Data
 */

class DataList extends React.Component {


    state = {
        forecastWeatherData: [],
        current_temp: null,
        current_press: null,
        current_hum: null,
        description: '', 
        current_wind_speed: null,
        current_wind_gust: null,
        current_clouds: null,
        coordinates: {},
        city: '',
        country: '',
        isLoaded: false
    }



    async componentDidMount() {

        const responseForecast = await getForecastWeatherData()
        this.setState({
            forecastWeatherData: responseForecast.list, 
            city: responseForecast.city.name,
            coordinates: responseForecast.city.coord,
            country: responseForecast.city.country,
            isLoaded: true
        })


        const responseWeather = await getWeatherData();
        this.setState({
            current_temp: responseWeather.main.temp,
            current_temp_max: responseWeather.main.temp_max,
            current_temp_min: responseWeather.main.temp_min,
            current_press: responseWeather.main.pressure,
            current_hum: responseWeather.main.humidity,
            current_wind_speed: responseWeather.wind.speed,
            current_wind_gust: responseWeather.wind.gust,
            current_wind_direction: responseWeather.wind.deg,
            current_clouds: responseWeather.clouds.all,
            icon: responseWeather.weather[0].icon,
            description: responseWeather.weather[0].description
        })

    }

    handleSearch = async (city) => {

        const responseForecast = await getSearchForecastWeatherData( city )
        this.setState({
            forecastWeatherData: responseForecast.list, 
            city: responseForecast.city.name,
            coordinates: responseForecast.city.coord,
            country: responseForecast.city.country,
            isLoaded: true
        })


        const responseWeather = await getSearchWeatherData( city );
            this.setState({
                current_temp: responseWeather.main.temp,
                current_temp_max: responseWeather.main.temp_max,
                current_temp_min: responseWeather.main.temp_min,
                current_press: responseWeather.main.pressure,
                current_hum: responseWeather.main.humidity,
                current_wind_speed: responseWeather.wind.speed,
                current_wind_gust: responseWeather.wind.gust,
                current_wind_direction: responseWeather.wind.deg,
                current_clouds: responseWeather.clouds.all,
                icon: responseWeather.weather[0].icon,
                description: responseWeather.weather[0].description
            })

    }


    render() {

        const { forecastWeatherData, current_temp, current_temp_max, current_temp_min, current_press, current_hum, icon, description, current_wind_speed, current_wind_gust, current_wind_direction, current_clouds, city, country, coordinates } = this.state

        // Selecting the forecast data (temperature, air pressure, rainfall, humidity...)

        let forecastTemp = [];
        let forecastPress = [];
        let forecastRain = [];
        let forecastHum = [];
        let forecastWindSpeed = [];
        let forecastClouds = [];

        for (let register of forecastWeatherData){
            register.main.temp ? forecastTemp.push(register.main.temp) : forecastTemp.push(null)
            register.main.pressure ? forecastPress.push(register.main.pressure) : forecastPress.push(null)
            register.rain ? forecastRain.push(register.rain['3h']) : forecastRain.push(null)
            register.main.humidity ? forecastHum.push(register.main.humidity) : forecastHum.push(null)
            register.wind.speed ? forecastWindSpeed.push(register.wind.speed) : forecastWindSpeed.push(null) 
            register.clouds.all ? forecastClouds.push(register.clouds.all) : forecastClouds.push(null) 

        }

 

        return (
            this.state.isLoaded ?
                <div>
                    <div className="datalist container">
                        <Title city={ city } country={ country } coordinates={ coordinates } />
                        <SearchBar handle_search={this.handleSearch}/>
                        <div className="row">
                            <div className="col-12 text-center h2">
                                Current Weather Conditions
                                <hr/>
                            </div>
                                <DataCombo current_temp={ current_temp } current_temp_max={ current_temp_max } current_temp_min={ current_temp_min }  current_press={ current_press } current_hum={ current_hum } icon={ icon } description={ description } current_wind_speed={ current_wind_speed }
                                    current_wind_gust={ current_wind_gust } current_wind_direction={ current_wind_direction } current_clouds={ current_clouds } />
                            <div className="col-12 text-center h2">
                                24-hr Weather Forecast
                                <hr/>
                             </div>
                            <DataSquare data={ forecastTemp } title={'Temperature'} chartId={'ch1'} code={'tem'} chartType={'line'}/>
                            <DataSquare data={ forecastPress } title={'Air Pressure'} chartId={'ch2'} code={'pre'} chartType={'line'}/>
                            <DataSquare data={ forecastRain } title={'Rainfall'} chartId={'ch3'} code={'rai'} chartType={'bar'}/>
                            <DataSquare data={ forecastHum } title={'Relative Humidity'} chartId={'ch4'} code={'hum'} chartType={'line'}/>
                            <DataSquare data={ forecastWindSpeed } title={'Wind Speed'} chartId={'ch5'} code={'win'} chartType={'line'}/>
                            <DataSquare data={ forecastClouds } title={'Clouds Evolution'} chartId={'ch6'} code={'clo'} chartType={'bar'}/>
                        </div>
                    </div>
                        <Footer />
                </div> 
                :
                <div><p className="text-center mt-20">Loading Data...</p></div>
        )

    }
    
}

export default DataList;