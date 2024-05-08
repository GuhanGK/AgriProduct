import React, { useEffect, useState } from "react";
import SoilTestingWrap from "./style";
import { Form, Input, Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserData } from "../../../Redux/AuthRedux";
import { useDispatch, useSelector } from "react-redux";
import { UploadOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import Image1 from "../../../Assets/Images/soil-testing-1.jpg";
import Image2 from "../../../Assets/Images/soil-testing-2.jpg";
import Image3 from "../../../Assets/Images/soil-testing-3.jpg";
import Image4 from "../../../Assets/Images/soil-testing-4.jpg";
import Image5 from "../../../Assets/Images/soil-testing-5.jpg";
import Image6 from "../../../Assets/Images/soil-testing-6.jpg";

import { Carousel, Col, Row } from "react-bootstrap";
const { Dragger } = Upload;

export const SoilTesting = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  console.log("SoilTesting ~ uploadedImage---->", uploadedImage)
  let baseUrl = "http://127.0.0.1:3000/agri/";
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  const handleSubmit = async (e) => {
    console.log("submitted!!", e);
    let obj = {};
    setLoading(true);
    try {
      let response = await axios.post(`${baseUrl}`, obj);
      if (response.data.status) {
        setLoading(false);
      }
    } catch (error) {
      console.log("error while making api call..", error);
      let message = error?.response?.data?.message || "Error while login!!";
      setErrorMsg(message);
      setLoading(false);
      return false;
    }
  };
  const carouselItems = [
    {
      imageUrl: Image1,
      text: "Soil is one of the most important factors which has a great impact on the growth of crops. For successful cultivation of crops, estimation of soil chemical, as well as physical properties plays a crucial role. Hence testing soil helps farmers & researchers to understand nutrient availability, pH, etc.",
    },
    {
      imageUrl: Image2,
      text: "Soil testing is the rapid chemical analysis to know the nutrient status & reaction of soil. In the broader sense, it is the evaluation and interpretation of fertilizer recommendations based on soil test values. Through testing, we get to know macro-nutrient values and pH of the soil.",
    },
    {
      imageUrl: Image6,
      text: "If you want to test the soil in the laboratory, then you will need to understand the principles for collecting soil sampling. It helps us in taking precise samples from the field for best analysis of the soil properties. Soil is a heterogenous body, therefore there are obvious fluctuations in pH and nutrient availability from place to place even on a farm. Moreover we cannot collect samples from every place in the farm. Therefore, an appropriate division of land is necessary for minimizing the heterogeneity of the soil.",
    },
    {
      imageUrl: Image4,
      text: "After determining soil units by taking principles of soil sampling into consideration, you can collect soil samples from each of these units. It helps in determining mean or average values of these collected values. For assesment of properties of soil samples, all the collected samples are mixed together to get the average value.",
    },
    {
      imageUrl: Image5,
      text: "It is beneficial for farmers as it helps in reducing fertilizer waste and getting the maximum yield possible. However, due to the need for technology and skills, it is not so common among farmers in developing or poor countries. That’s why many brands that sell fertilizers often exploit them by selling larger amounts of fertilizers.",
    },
    {
      imageUrl: Image3,
      text: "While performing tests on soil we can not focus only one once component or the other, but for successful interpretition one should perform these tests.\n 1.pH value test \n 2.Moisture content test \n 3.Nutrient content test \n 4.Salinity test \n 5.Structure & texture test \n 6.Pesticides or chemical contamination test, etc",
    },
  ];

  const handleImageUpload = info => {
    if (info.file.status === 'done') {
      setUploadedImage(info.file.originFileObj);
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("handleFileChange ~ selectedFile---->", selectedFile)
    setFile(selectedFile);
  };

  const handleDivClick = () => {
    document.getElementById('fileInput').click();
  };
  return (
    <SoilTestingWrap>
      <div className="container_wrap">
        {loading && <Spin spinning={loading} fullscreen size="large" />}

        <p className="heading_soil">Soil Testing</p>
        <div className="dashboard_container">
          <div className="carousel_box">
            <Carousel className="carousel_Img_container">
              {carouselItems.map((item, i) => {
                return (
                  <Carousel.Item key={i} className="carousel_Img_item">
                    <Row>
                      <Col md={6}>
                        <img
                          src={item.imageUrl}
                          alt={`Soil testing ${i + 1}`}
                          className="carousel_Img"
                        />
                      </Col>
                      <Col md={6}>
                        <div className="carousel_text">{item.text}</div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
          <div className="file_upload_container my-5">
       
              <div className="p-4"  onClick={handleDivClick}>
              <input
                id="fileInput"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileChange}
                accept="image/*"
              />
                <p className="ant-upload-drag-icon">
                  <UploadOutlined style={{color:"rgb(0 0 0 / 47%)", fontSize:"35px"}}/>
                </p>
                <p className="ant-upload-hint">Click or drag file to this area to upload</p>
                <p className=" ant-upload-text" >
                  Please select a soil image for soil testing.
                </p>
              </div>

          </div>
        </div>
      </div>
    </SoilTestingWrap>
  );
};
