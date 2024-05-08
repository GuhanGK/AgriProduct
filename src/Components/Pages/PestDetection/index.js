import React, { useState } from "react";
import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import { Carousel, Upload, message, Image } from "antd";
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
const { Dragger } = Upload;

const PestDetection = () => {
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
  //----------------------------------------------------------------//
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: pestImg6,
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: pestImg7,
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: pestImg8,
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: pestImg9,
    },
    // {
    //   uid: "-xxx",
    //   percent: 50,
    //   name: "image.png",
    //   status: "uploading",
    //   url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    // },
    // {
    //   uid: "-5",
    //   name: "image.png",
    //   status: "error",
    // },
  ]);
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );
  return (
    <>
      <PestStyle>
        <div className=" bg-primary rounded">
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg1} />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg5} />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg3} />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src={pestImg4} />
              </h3>
            </div>
          </Carousel>{" "}
        </div>
        <div className="m-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibited from
              uploading company data or other banned files.
            </p>
          </Dragger>
        </div>

        <div className="m-5 d-flex justify-content-center align-items-center">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}
          >
            {fileList.length >= 8 ? null : uploadButton}
          </Upload>
          {previewImage && (
            <Image
              wrapperStyle={{
                display: "none",
              }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage(""),
              }}
              src={previewImage}
            />
          )}
        </div>
      </PestStyle>
    </>
  );
};

export default PestDetection;
