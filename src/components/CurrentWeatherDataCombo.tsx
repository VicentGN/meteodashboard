import { useWeatherContext } from '../context/WeatherContext'
import CurrentWeatherDescription from './CurrentWeatherDescription';

export default function CurrentWeatherDataCombo() {

  const { iconUrl, description } = useWeatherContext();

  return (
    <div className='col-12 mb-3'>
      <div className='row'>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <p className="text-center"><img src={`http://openweathermap.org/img/wn/${iconUrl}@4x.png`} alt="icon"></img></p>
          <p className='text-center h2 mb-5'>{description?.toUpperCase()}</p>
        </div>
        <CurrentWeatherDescription />
      </div>
    </div>
  )
}