import React, { useEffect, useState } from "react";
import { ReactComponent as CloudImg } from "../../../Assets/Images/cloud.svg";
import WeatherStyle from "../Weather/style";
import axios from "axios";
import { Row, Spinner } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';

function NextDaysWeather({location,data}) {

  const [weatherData, setWeatherData] = useState(data);
  const [loading, setLoading] = useState(false);

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const options = { weekday: 'long', hour: 'numeric', minute: 'numeric' };
      setCurrentDate(new Intl.DateTimeFormat('en-US', options).format(now));
    }, 1000); 

    return () => clearInterval(interval);
  }, []);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[date.getDay()];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

    const formattedDate = dayOfWeek + ', ' + day + '-' + month + '-' + year;
    return formattedDate;
}


  function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);;
}
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

  return (
    <WeatherStyle className="d-flex justify-content-center">
     
        {loading ?
            <div className="loader_skeleton">
            <h2>
              {/* Use Skeleton to create placeholder text */}
              <Skeleton height={40} width={"70%"}/>
            </h2>
            <div className="skeleton_loader_second_row mt-4">
              <Skeleton circle = {true} height={100} width={100} />
              <div className="w-25">
                <Skeleton height={40}  />
                <Skeleton className="mt-2" height={30}  />
              </div>
              <p className="w-25">
                <Skeleton count={4} height={20} width={"100%"}/>
              </p>
  
            </div>       
          </div>
        :
            <Row className="weather_header_container mb-4">
              <div>
                <h2 className="text-center weather_place_title">{formatDate(weatherData?.date)}</h2>
                <p className="mb-0 current_date_time"></p>
                <p className="text-center weather_place_data"> {capitalizeFirstLetter(weatherData?.weather)}</p>
              </div>
                <div className="weather_header"> 
                    <div className="weather_image_side">
                        <CloudImg className="cloud_img" />
                        <div className="weather_temp_value">    
                            <p className="mb-0">{kelvinToCelsius(weatherData?.data?.temp)}°C</p>
                            {/* <p className="mb-0 current_date_time">{currentDate}</p> */}
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
                            <p>{kelvinToCelsius(weatherData?.data?.temp_min)}°C - {kelvinToCelsius(weatherData?.data?.temp_max)}°C</p>
                        </div>
                    </div>
                </div>

            </Row>
        }
        
    </WeatherStyle>
  );
}

export default NextDaysWeather;
