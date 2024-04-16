import React, { useEffect, useState } from "react";
import { ReactComponent as CloudImg } from "../../../Assets/Images/cloud.svg";
import WeatherStyle from "./style";
import axios from "axios";
import { Row } from "react-bootstrap";

function WeatherDisplay() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [hourlyWeather, setHourlyWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
      setCurrentDate(new Intl.DateTimeFormat('en-US', options).format(now));
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }));
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  const API_KEY = "2483d648e19926ffd5ff0e36ca531895";

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeatherDataByCoords(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.error("Error getting user location:", error);
            setError("Error getting user location. Please try again.");
          }
        );
      } else {
        setError("Geolocation is not supported by this browser.");
      }
    };

    getLocation();
  }, []);

  const fetchWeatherDataByCoords = async (latitude, longitude) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
    }
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  const fetchWeatherData = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("City not found. Please try again.");
    }
    setLoading(false);
  };

  return (
    <WeatherStyle>
      <div>
        {/* <h1>Weather Forecast</h1> */}
        {/* <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" onSubmit={handleSubmit}>
          Get Weather
        </button> */}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <Row className="weather_header_container">
            <h2 className="text-center weather_place_title">Weather in {weatherData?.name}</h2>
            <div className="weather_header"> 
                <CloudImg className="cloud_img" />
                <div className="weather_temp_value">
                    <p className="mb-0">{weatherData?.main.temp}°C</p>
                    <p className="mb-0 current_date_time">{currentDate}</p>
                </div> 
                <div className="weather_deatils_box">
                    <div className="weather_deatils_data">
                        <p>Temperature: </p>
                        <p>{weatherData?.main?.temp}°C</p>
                    </div>
                    <div className="weather_deatils_data">
                        <p>Weather Condition: </p>
                        <p>{weatherData?.weather[0]?.main}</p>
                    </div>
                    <div className="weather_deatils_data">
                        <p>Humidity: </p>
                        <p>{weatherData?.main?.humidity}%</p>
                    </div>
                    <div className="weather_deatils_data">
                        <p>Wind Speed: </p>
                        <p>{weatherData?.wind?.speed} m/s</p>
                    </div>
                </div>
            </div>
        </Row>
      </div>
    </WeatherStyle>
  );
}

export default WeatherDisplay;