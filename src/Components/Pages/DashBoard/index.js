import React from "react";
import DashboardStyle from "./style";
import WeatherDisplay from "../Weather";
import Image1 from "../../../Assets/Images/Img1.jpg";
import Image2 from "../../../Assets/Images/Img2.jpg";
import Image3 from "../../../Assets/Images/Img3.jpg";
import soilTesting from "../../../Assets/Images/soil-testing-3.jpg";
import pestDetection from "../../../Assets/Images/pest_detection.png";
import cropImg from "../../../Assets/Images/crop_management.jpg";
import { Button, Carousel } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const images = [Image1, Image2, Image3];
  const navigate = useNavigate();  

  return (
    <>
      <DashboardStyle>
        <div className="dashboard_container">
          <div className="weather_container">
            <WeatherDisplay />
          </div>

          <div className="crop_management_div">
            <img src={cropImg} alt="crop management" className="crop_image"/>
            <div className="crop_data p-4">
               <h1>Crop Management</h1> 
                <p className="text-justify"> Adoption of best crop management practices improves crop productivity and can contribute to greater yields with improved quality. Crop management is the set of agricultural practices performed to improve the growth, development and yield of crops</p>              
                <p>To see all your crops go to the crops management page...</p>
                <Button variant="success" onClick={()=>navigate("/crop-management")}>Know more</Button>
            </div>
          </div>

          <div className="crop_management_div">
            <div className="crop_data p-4">
            <h1>Pest Detection</h1> 
                <p className="text-justify"> Plant diseases and pests is one kind of natural disasters that affect the normal growth of plants and even cause plant death during the whole growth process of plants from seed development to seedling and to seedling growth.</p>              
                <p>Visit the pest detection page to find out which pest attacked your crop.</p>
                <Button variant="success" onClick={()=>navigate("/pest-detection")}>Know more</Button>
            </div>
            <img src={pestDetection} alt="crop management" className="crop_image"/>           
          </div>

          <div className="crop_management_div">
            <img src={soilTesting} alt="crop management" className="crop_image"/>
            <div className="crop_data p-4">
               <h1>Soil Testing</h1> 
                <p className="text-justify"> Soil is one of the most important factors which has a great impact on the growth of crops. For successful cultivation of crops, estimation of soil chemical, as well as physical properties plays a crucial role.</p>              
                <p>To understand the nutrient levels, pH balance, and composition of your soil go to the soil testing page.</p>
                <Button variant="success" onClick={()=>navigate("/soil-testing")}>Know more</Button>
            </div>
          </div>

          




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
      </DashboardStyle>
    </>
  );
};

export default Dashboard;
