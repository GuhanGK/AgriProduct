import React from "react";
import DashboardStyle from "./style";
import WeatherDisplay from "../Weather";
import Image1 from "../../../Assets/Images/Img1.jpg";
import Image2 from "../../../Assets/Images/Img2.jpg";
import Image3 from "../../../Assets/Images/Img3.jpg";
import { Carousel } from "react-bootstrap";

const Dashboard = () => {

    const images = [
        Image1,
        Image2,
        Image3
    ];

    return (
        <>
            <DashboardStyle>
                <div className="dashboard_container">
                    <div className="carousel_box">
                        <Carousel className="carousel_Img_container">
                            {images.map((imageUrl, i) => {
                                return (
                                <Carousel.Item className="carousel_Img_item">
                                    <img src={imageUrl} alt="123" className="carousel_Img" />
                                </Carousel.Item>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
                <br />
                <div className="weather_container">
                    <WeatherDisplay />
                </div>
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
