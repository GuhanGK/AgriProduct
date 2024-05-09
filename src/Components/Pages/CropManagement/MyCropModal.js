import React, { useState } from "react";
import CropStyle from "./Style";
import { Button, Form } from "react-bootstrap";
import { DatePicker } from "antd";
import moment from "moment/moment";
import ProductMenuItems from "../../../ProductMenu";
import { CiCircleCheck } from "react-icons/ci";
import { BsFillPatchCheckFill } from "react-icons/bs";

const SelectedMyCropModal = ({ selectedCrop, setMySelectedCrop, setSowingInput, handleCloseModal }) => {
    const [formInput, setFormInput] = useState()
    const [getItemIndex, setGetItemIndex] = useState()
    console.log("formInput--->", formInput)

    const handleAddCrop = (e) => {
        e.preventDefault()
        setSowingInput(formInput)
        setMySelectedCrop(prev => [...prev, {
            img: selectedCrop?.img,
            title: selectedCrop?.title
        }])
        handleCloseModal()
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

    const hanldeClickItem = (index) => {
        setGetItemIndex(index)
    }
    
  return (
    <CropStyle>
      <div className="selected_crop_modal_body">
        <p>Which Crop are you growing:</p>
        <div className="selected_mycrop_img">
            {ProductMenuItems.map((item, index) => {
                return(
                    <div className="my_crop_items" key={index}>
                        <div onClick={() => hanldeClickItem(index)}>
                            <img
                                src={item?.img}
                                width={35}
                                height={35}
                                alt="SelectedCrop"
                            />
                            <p>{item?.title}</p>
                        </div>
                        {getItemIndex === index && <BsFillPatchCheckFill className="selected_icon"/>}
                    </div>
                )})
            }
            <p className="crop_item_title">{selectedCrop?.title}</p>
        </div>

        <Form onSubmit={(e) => handleAddCrop(e)}>
          <Form.Group
            controlId="formBasicPassword"
            className="sowing_input_fields"
          >
            <Form.Label>Sowing Date</Form.Label>
            <DatePicker
             name="sowing_Date"
             onChange={handleChangeDate}
             required
            />
          </Form.Group>
          <br />
          <Form.Group
            controlId="formBasicPassword"
            className="sowing_input_fields"
          >
            <Form.Label>What is the area of your farm?</Form.Label>
            <Form.Control type="number" name="acre" placeholder="Acre" onChange={(e) => handleChangeInput(e.target.name, e.target.value)} required />
          </Form.Group>
          <br />
          <Form.Group
            controlId="formBasicPassword"
            className="sowing_input_fields"
          >
            <Form.Label>Enter the Survey Number</Form.Label>
            <Form.Control type="text" name="survey" placeholder="Survey Number" onChange={(e) => handleChangeInput(e.target.name, e.target.value)} required />
          </Form.Group>
          <br />
          <div className="add_crop_button">
            <Button type="submit">Add Crop</Button>
          </div>
        </Form>
      </div>
    </CropStyle>
  );
};

export default SelectedMyCropModal;
