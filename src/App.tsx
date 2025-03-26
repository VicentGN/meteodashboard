import './App.css'
import { WeatherProvider } from './context/WeatherContext'
import Dashboard from './components/Dashboard'

function App() {

  return (

    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
    
  )
}

export default App
