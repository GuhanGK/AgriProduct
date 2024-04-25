import React, { useEffect, useState } from "react";
import DashboardStyle from "./style";
import WeatherDisplay from "../Weather";
import { motion, AnimatePresence } from 'framer-motion';
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

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length]);

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
                    <div className="weather_container">
                        <WeatherDisplay />
                    </div>
                </div>
            </DashboardStyle>
        </>
    );
};

export default Dashboard;
