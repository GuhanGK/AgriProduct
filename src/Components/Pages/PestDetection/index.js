import React, { useEffect, useState } from "react";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { Carousel, Upload, message, Image, ConfigProvider } from "antd";
import { TinyColor } from "@ctrl/tinycolor";
import pestImg1 from "../../../Assets/Images/autonomous_farming.jpg";
import pestImg2 from "../../../Assets/Images/crop-sprayer-scaled.jpg";
import pestImg3 from "../../../Assets/Images/drone_shot.jpg";
import pestImg4 from "../../../Assets/Images/detect_mbl.webp";
import pestImg5 from "../../../Assets/Images/detect.jpg";
import pestImg6 from "../../../Assets/Images/Farmer-using-tablet-corn-planting.webp";
import pestImg7 from "../../../Assets/Images/digital_agriculture.jpg";
import pestImg8 from "../../../Assets/Images/modern_agriculture_bg.png";
import pestImg9 from "../../../Assets/Images/wheat+stock+photo.jpeg";
import pestImg10 from "../../../Assets/Images/soiltesting.png";
import PestStyle from "./style";
import axios from "axios";
import ModalImage from "react-modal-image";
import {
  UploadOutlined,
  ArrowRightOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
import SoilTestingWrap from "../SoilTesting/style";
import { Button, Row } from "react-bootstrap";
const { Dragger } = Upload;

const PestDetection = () => {
  const [file, setFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [apiResponse, setApiResponse] = useState("");
  const [base64Image, setBase64Image] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  
  console.log("PestDetection ~ apiResponse---->", apiResponse);
  useEffect(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }, [apiResponse]);

  useEffect(() => {
    const imageUrl = file ? URL.createObjectURL(file) : null;
    console.log("useEffect ~ file---->", file?.name);
    setUploadedImage(imageUrl);
  }, [file]);

  const soilTestHandler = async () => {
    console.log("submitted!!", base64Image);
    console.log("soilTestHandler ~ obj.file---->", file.name);
    let obj = {
      image: file.name,
      imageFile: base64Image,
    };
    try {
      let response = await axios.post(`${baseUrl}pest-detection`, obj);
      if (response.data.status) {
        console.log("Api call success!!");
        setApiResponse(response.data.data);
      }
    } catch (error) {
      console.log("error while making api call..", error);
      let message = error?.response?.data?.message || "Error while login!!";
      setErrorMsg(message);
      return false;
    }
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    console.log("handleFileChange ~ selectedFile---->", selectedFile);
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = (event) => {
      setBase64Image(event.target.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  let baseUrl = "http://127.0.0.1:3000/agri/";
  const contentStyle = {
    height: "350px",
    color: "#fff",
    lineHeight: "260px",
    textAlign: "center",
    background: "#364d79",
  };
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  }; 

  const handleDivClick = () => {
    document.getElementById("fileInput").click();
  };
  return (
    <>
      <PestStyle>
        <div className=" bg-primary rounded">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img alt="pest detection 1" src={pestImg1} />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg5} alt="pest detection 2" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg3} alt="pest detection 3" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg4} />
              </h3>
            </div>
          </Carousel>{" "}
        </div>

        <SoilTestingWrap>
          <div className="file_upload_container my-5">
            <div className="p-4 dashed_div" onClick={handleDivClick}>
              <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
                accept="image/*"
              />
              <p className="ant-upload-drag-icon">
                <UploadOutlined
                  style={{ color: "rgb(0 0 0 / 47%)", fontSize: "35px" }}
                />
              </p>
              <p className="ant-upload-hint">
                Click or drag file to this area to upload
              </p>
              <p className=" ant-upload-text">
                Please select a soil image for soil testing.
              </p>
            </div>
          </div>

          <div className="view_image mb-5">
            {uploadedImage && (
              <div className="image_wrapper p-4">
                <div className="image_box" style={{ width: 150 }}>
                  <ModalImage
                    small={uploadedImage}
                    large={uploadedImage}
                    hideZoom={false}
                    showRotate={true}
                  />
                  <CloseCircleOutlined
                    className="remove_btn"
                    onClick={() => setUploadedImage(null)}
                  />
                </div>
                <div>
                  <Button
                    className="start_test_btn"
                    variant="success"
                    onClick={() => {
                      soilTestHandler();
                    }}
                  >
                    Start Test <ArrowRightOutlined />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </SoilTestingWrap>
        {
          apiResponse &&
          <>
           <Row className="results_head">
             <p className="pest_name">Pest name : {apiResponse?.pestname}</p>
            </Row>
            <div className="m-2 d-flex align-items-center justify-content-around">
              <div className="rounded">
                <p className="side_heading">SYMPTOMS</p>
                { 
                  apiResponse?.symptoms?.map((item, i)=>{
                    return(
                      <p className="messages">{i+1}.{item}</p>
                    )
                  })
                }
              </div>
              <div className="rounded">
                <p className="side_heading">PREVENTIONS</p>
                {
                  apiResponse?.prevention?.map((item, i)=>{
                    return(
                      <p  className="messages">{i+1}.{item}</p>
                    )
                  })
                }
              </div>
            </div>
          </>
        }
           
      </PestStyle>
    </>
  );
};

export default PestDetection;
