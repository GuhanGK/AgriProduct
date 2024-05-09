import React, { useState } from "react";
import CropStyle from "./Style";
import { Button, Form } from "react-bootstrap";
import { DatePicker } from "antd";
import moment from "moment/moment";
import ProductMenuItems from "../../../ProductMenu";
import { BsFillPatchCheckFill } from "react-icons/bs";
import axios from "axios";
import { setMyCropDataData } from "../../../Redux/TrackingRedux";
import { useDispatch, useSelector } from "react-redux";

const SelectedMyCropModal = ({ selectedCrop, setMySelectedCrop, setSowingInput, handleCloseModal }) => {
    const [formInput, setFormInput] = useState()
    const [getItemIndex, setGetItemIndex] = useState()
    const [getItem, setGetItem] = useState()
    const dispatch = useDispatch();
    const myCropDataData = useSelector((state) => state.tracking.getMyCropData);
    console.log("formInput--->", formInput)

    let data = localStorage.getItem('userData');
    let user;
    if(data){
        user = JSON.parse(data);
    }

    // const handleAddCrop = async(e) => {
    //     e.preventDefault()
    //     setSowingInput(formInput)
    //     const URL = "http://127.0.0.1:3000/agri/addmycrops";
    //     try{
    //         const obj = {
    //             "emailId": user?.emailId,
    //             "cropName": selectedCrop?.title,
    //             "sowingDate": formInput.sowing_Date,
    //             "area": formInput.acre,
    //             "surveyNumber": formInput.survey
    //         }
    //         console.log("obj--->", obj)

    //         const response = await axios.post(URL,obj)
    //         if(response.status){
    //             console.log("response---->", response)
                
    //         }
    //     }catch(error){
    //         console.log("error--->", error)
    //     }
    //     setMySelectedCrop(prev => [...prev, {
    //         img: selectedCrop?.img,
    //         title: selectedCrop?.title
    //     }])
    //     handleCloseModal()
    // }

    const handleChangeInput = (name, val) => {
        setFormInput((prev) => ({
            ...prev,
            [name]: val
        }))
    }

    const handleChangeDate = (date) => {
        handleChangeInput("sowing_Date", moment(date.$d).format('YYYY-MM-DD'));
    };

    const hanldeClickItem = (index, item) => {
        setGetItemIndex(index)
        setGetItem(item)
    }
    const handleAddCrop = async(e) => {
      e.preventDefault()
      setSowingInput(formInput)
      const URL = "http://127.0.0.1:3000/agri/addmycrops";
      try{
          const obj = {
              "emailId": user?.emailId,
              "cropName": getItem?.title,
              "sowingDate": formInput.sowing_Date,
              "area": formInput.acre,
              "surveyNumber": formInput.survey
          }
          console.log("obj--->", obj)

          const response = await axios.post(URL,obj)
          if(response.status){
              console.log("response---->", response)
              const newData = [obj,...myCropDataData];
              console.log("handleAddCrop ~ newData---->", newData)
              
              dispatch(setMyCropDataData(newData));
              handleCloseModal();
          }
      }catch(error){
          console.log("error--->", error)
      }
      setMySelectedCrop(prev => [...prev, {
          img: selectedCrop?.img,
          title: selectedCrop?.title
      }])
      handleCloseModal()
  }
    
  return (
    <CropStyle>
      <div className="selected_crop_modal_body">
        <p>Which Crop are you growing:</p>
        <div className="selected_mycrop_img">
            {ProductMenuItems.map((item, index) => {
                return(
                    <div className="my_crop_items" key={index}>
                        <div onClick={() => hanldeClickItem(index, item)}>
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
