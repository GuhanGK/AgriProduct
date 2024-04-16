import React, { useState, useEffect } from "react";
import axios from 'axios';
import DashboardStyle from "./style";
import WeatherDisplay from "../Weather";

const Dashboard = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "2483d648e19926ffd5ff0e36ca531895";

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeatherDataByCoords(position.coords.latitude, position.coords.longitude);
          },
          (error) => {
            console.error('Error getting user location:', error);
            setError('Error getting user location. Please try again.');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
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
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      setError("City not found. Please try again.");
    }
    setLoading(false);
  };

  return (
    <>
      <DashboardStyle>
        <div className="App">
            <WeatherDisplay data={weatherData} />
        </div>
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
