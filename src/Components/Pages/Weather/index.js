import React, { useEffect, useState } from "react";
import { ReactComponent as CloudImg } from "../../../Assets/Images/cloud.svg";
import WeatherStyle from "./style";
import axios from "axios";
import { Row } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { weekday: "long", hour: "numeric", minute: "numeric" };
      setCurrentDate(new Intl.DateTimeFormat("en-US", options).format(now));
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  console.log("weatherData==>", weatherData);

  const API_KEY = "2483d648e19926ffd5ff0e36ca531895";

  useEffect(() => {
    const getLocation = () => {
      setLoading(true);
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
    setError("");
    try {
      const response = await axios.get(
        `http://127.0.0.1:3000/agri/current_weather`
      );
      console.log("fetchWeatherDataByCoords ~ response---->", response.data);
      console.log(
        "fetchWeatherDataByCoords ~ response---->",
        response.data.data
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching weather data. Please try again.");
      setLoading(false);
    }
  };

  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
  }

  return (
    <WeatherStyle className="d-flex justify-content-center">
      {loading ? (
        <div className="loader_skeleton">
          <h2>
            <Skeleton height={40} width={"70%"} />
          </h2>
          <div className="skeleton_loader_second_row mt-4">
            <Skeleton circle={true} height={100} width={100} />
            <div className="w-25">
              <Skeleton height={40} />
              <Skeleton className="mt-2" height={30} />
            </div>
            <p className="w-25">
              <Skeleton count={4} height={20} width={"100%"} />
            </p>
          </div>
        </div>
      ) : (
        <Row className="weather_header_container">
          <div>
            <h2 className="text-center weather_place_title">
              Weather in {weatherData?.location}
            </h2>
            <p className="text-center weather_place_data">
              {" "}
              {weatherData?.weather}
            </p>
          </div>
          <div className="weather_header">
            <div className="weather_image_side">
              <CloudImg className="cloud_img" />
              <div className="weather_temp_value">
                <p className="mb-0">
                  {kelvinToCelsius(weatherData?.data?.temp)}°C
                </p>
                <p className="mb-0 current_date_time">{currentDate}</p>
              </div>
            </div>

            <div className="weather_deatils_box">
              <div className="weather_deatils_data">
                <p>Temperature: </p>
                <p>{kelvinToCelsius(weatherData?.data?.temp)}°C</p>
              </div>
              <div className="weather_deatils_data">
                <p>Feels like: </p>
                <p>{kelvinToCelsius(weatherData?.data?.feels_like)}°C</p>
              </div>

              <div className="weather_deatils_data">
                <p>Humidity: </p>
                <p>{weatherData?.data?.humidity}%</p>
              </div>
              <div className="weather_deatils_data">
                <p>Wind Speed: </p>
                <p>{weatherData?.wind} m/s</p>
              </div>
              <div className="weather_deatils_data">
                <p>Temperature Min - Max: </p>
                <p>
                  {kelvinToCelsius(weatherData?.data?.temp_min)}°C -{" "}
                  {kelvinToCelsius(weatherData?.data?.temp_max)}°C
                </p>
              </div>
            </div>
          </div>
        </Row>
      )}
    </WeatherStyle>
  );
}

export default WeatherDisplay;
