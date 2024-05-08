import React, { useState } from "react";
import CropStyle from "./Style";
import { Button, Form } from "react-bootstrap";
import { DatePicker } from "antd";
import moment from "moment/moment";

const SelectedCropModal = ({ selectedCrop, setMySelectedCrop, setSowingInput }) => {
    const [formInput, setFormInput] = useState()
    console.log("formInput--->", formInput)

    const handleAddCrop = () => {
        console.log("selectedCrop--->", selectedCrop.title)
        setSowingInput(formInput)
        setMySelectedCrop(prev => [...prev, {
            img: selectedCrop?.img,
            title: selectedCrop?.title
        }])
    }

    const handleChangeInput = (name, val) => {
        setFormInput((prev) => ({
            ...prev,
            [name]: val
        }))
    }

    const handleChangeDate = (date) => {
        handleChangeInput("sowing_Date", moment(date.$d).format('YYYY-MM-DD'));
    };
    
  return (
    <CropStyle>
      <div className="selected_crop_modal_body">
        <p>Selected Crop:</p>
        <div className="selected_crop_img">
          <img
            src={selectedCrop?.img}
            width={50}
            height={100}
            alt="SelectedCrop"
          />
          <p className="crop_item_title">{selectedCrop?.title}</p>
        </div>

        <div>
          <Form.Group
            controlId="formBasicPassword"
            className="sowing_input_fields"
          >
            <Form.Label>Sowing Date</Form.Label>
            <DatePicker
             name="sowing_Date"
             onChange={handleChangeDate}
            />
          </Form.Group>
          <br />
          <Form.Group
            controlId="formBasicPassword"
            className="sowing_input_fields"
          >
            <Form.Label>What is the area of your farm?</Form.Label>
            <Form.Control type="number" name="acre" placeholder="Acre" onChange={(e) => handleChangeInput(e.target.name, e.target.value)} />
          </Form.Group>
          <br />
          <Form.Group
            controlId="formBasicPassword"
            className="sowing_input_fields"
          >
            <Form.Label>Enter the Survey Number</Form.Label>
            <Form.Control type="text" name="survey" placeholder="Survey Number" onChange={(e) => handleChangeInput(e.target.name, e.target.value)} />
          </Form.Group>
          <br />
          <div className="add_crop_button">
            <Button onClick={handleAddCrop}>Add Crop</Button>
          </div>
        </div>
      </div>
    </CropStyle>
  );
};

export default SelectedCropModal;
