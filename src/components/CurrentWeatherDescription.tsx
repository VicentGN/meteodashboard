import { useWeatherContext } from "../context/WeatherContext";


export default function CurrentWeatherDescription() {

    const { currentTemp, maxTemp, minTemp, currentPressure, currentHum, currentWindSpeed, windDirection, currentClouds } = useWeatherContext();


    return (

        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
            <div className="col-12 row">
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{checkData(currentTemp)}</h1>
                    <h6>Temperature (ºC)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{checkData(maxTemp)}</h1>
                    <h6>Max Temperature (ºC)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{checkData(minTemp)}</h1>
                    <h6>Min Temperature (ºC)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{checkData(currentHum)}</h1>
                    <h6>Humidity (%)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{checkData(currentPressure)}</h1>
                    <h6>Air Pressure (hPa)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{checkData(currentClouds)}</h1>
                    <h6>Cloud Coverage (%)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{windFromMetricToKilometric(currentWindSpeed)}</h1>
                    <h6>Wind Speed (Km/h)</h6>                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                    <h1 className="variable-description">{transformWindDirection(windDirection)}</h1>
                    <h6>Wind Direction</h6>                 
                </div>
            </div>
        </div>

    )

}

const checkData = (data: number | null) => data === null ? '- -' : data;

const windFromMetricToKilometric = (wind: number | null) => wind !== null ? Math.round(wind * ( 18 / 5 )) : "- -";

function transformWindDirection( deg: number | null ) {
    if ( deg === null ) {
        return 'N/A';
    }
    else if ( deg === 0) {
        return 'N'
    } else if ( deg > 0 && deg < 90 ) {
        return 'NE'
    } else if ( deg === 90) {
        return 'E'
    } else if ( deg > 90 && deg < 180 ) {
        return 'SE'
    } else if ( deg === 180 ) {
        return 'S'
    } else if ( deg > 180 && deg < 270 ){
        return 'SW'
    } else if ( deg === 270 ){
        return 'W'
    } else  if (deg > 270 && deg < 359){
        return 'NW'
    } else if ( deg === undefined ) {
        return undefined;
    }
}