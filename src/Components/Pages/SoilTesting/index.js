import React, { useEffect, useState } from "react";
import SoilTestingWrap from "./style";
import { Form, Input, Button, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserData } from "../../../Redux/AuthRedux";
import { useDispatch, useSelector } from "react-redux";

export const SoilTesting = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();  
  const dispatch = useDispatch();  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  let baseUrl = "http://127.0.0.1:3000/agri/";
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)


  useEffect(()=>{
    if(isLoggedIn){
      navigate("/");
    }
  },[])

  const handleSubmit = async (e) => {
    console.log("submitted!!", e);
    let obj = {
    };
    setLoading(true);
    try {
      let response = await axios.post(`${baseUrl}`, obj);      
      if (response.data.status) {
        setLoading(false);
       
      }
    } catch (error) {
      console.log("error while making api call..", error);
      let message = error?.response?.data?.message || "Error while login!!"
      setErrorMsg(message);
      setLoading(false);
      return false;
    }
  };

 
  return (
    <SoilTestingWrap>
      <div className="container_wrap">
        {loading && <Spin spinning={loading} fullscreen size="large" />}

       <h1>Soil Testing</h1>
      </div>
    </SoilTestingWrap>
  );
};
