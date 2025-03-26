import React, { createContext, useState, useContext, ReactNode } from "react";

type Coordinates = {
    lat?: number;
    lon?: number;
}

interface WeatherProviderProps {
    children: ReactNode;
}

type WeatherContextType = {
    forecastWeatherData: any[] | null;
    setForecastWeatherData: (data: any[] | null) => void;
    currentTemp: number | null;
    setCurrentTemp: (temp: number | null) => void;
    maxTemp: number | null;
    setMaxTemp: (temp: number | null) => void;
    minTemp: number | null;
    setMinTemp: (temp: number | null) => void;
    currentPressure: number | null;
    setCurrentPressure: (pressure: number | null) => void;
    currentHum: number | null;
    setCurrentHum: (humidity: number | null) => void;
    description: string | null;
    setDescription: (description: string | null) => void;
    currentWindSpeed: number | null;
    setCurrentWindSpeed: (speed: number | null) => void;
    windDirection: number | null;
    setCurrentWindDirection: (direction: number | null) => void;
    currentClouds: number | null;
    setCurrentClouds: (clouds: number | null) => void;
    coordinates: Coordinates | null;
    setCoordinates: (coords: Coordinates) => void;
    city: string;
    setCity: (city: string) => void;
    country: string;
    setCountry: (country: string) => void;
    isLoaded: boolean;
    setIsLoaded: (loaded: boolean) => void;
    iconUrl: string | null;
    setIconUrl: (icon: string | null) => void;
};

const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType);

export const WeatherProvider: React.FC<WeatherProviderProps> = ({ children }) => {

    const [forecastWeatherData, setForecastWeatherData] = useState<any[] | null>(null);
    const [currentTemp, setCurrentTemp] = useState<number | null>(null);
    const [maxTemp, setMaxTemp] = useState<number | null>(null);
    const [minTemp, setMinTemp] = useState<number | null>(null);
    const [currentPressure, setCurrentPressure] = useState<number | null>(null);
    const [currentHum, setCurrentHum] = useState<number | null>(null);
    const [description, setDescription] = useState<string | null>(null);
    const [currentWindSpeed, setCurrentWindSpeed] = useState<number | null>(null);
    const [windDirection, setCurrentWindDirection] = useState<number | null>(null);
    const [currentClouds, setCurrentClouds] = useState<number | null>(null);
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
    const [city, setCity] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [iconUrl, setIconUrl] = useState<string | null>(null);

    const value: WeatherContextType = {
        forecastWeatherData,
        currentTemp,
        maxTemp,
        minTemp,
        currentPressure,
        currentHum,
        description,
        currentWindSpeed,
        windDirection,
        currentClouds,
        coordinates,
        city,
        country,
        isLoaded,
        iconUrl,


        setForecastWeatherData,
        setCurrentTemp,
        setMaxTemp,
        setMinTemp,
        setCurrentPressure,
        setCurrentHum,
        setDescription,
        setCurrentWindSpeed,
        setCurrentWindDirection,
        setCurrentClouds,
        setCoordinates,
        setCity,
        setCountry,
        setIsLoaded,
        setIconUrl
    };

    return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
}



export const useWeatherContext = () => useContext(WeatherContext);
