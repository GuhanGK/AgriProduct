import React, { useEffect, useState } from "react";
import LoginStyle from "./style";
import { Form, Input, Button, Spin } from "antd";
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setUserData } from "../../../Redux/AuthRedux";
import { useDispatch } from "react-redux";

export const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();  
  const dispatch = useDispatch();  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  let baseUrl = "http://127.0.0.1:3000/agri/";
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("Login ~ isLoggedIn---->", isLoggedIn)


  useEffect(()=>{
    if(isLoggedIn){
      console.log("inside if condition")
      navigate("/");
    }
    // else{
      console.log("inside else condition")
      navigate("/login");
    // }
  },[isLoggedIn])

  const handleSubmit = async (e) => {
    console.log("submitted!!", e);
    let obj = {
      emailId: e.email,
      password: e.password,
    };
    setLoading(true);
    try {
      let response = await axios.post(`${baseUrl}login`, obj);      
      if (response.data.status) {
        setLoading(false);
        const userToken = response?.data?.authToken;
        const decodedUser = userToken ? jwtDecode(response.data?.authToken) : "";
        let result = {};
        if (userToken) {
          result = {
            isLoggedIn: true,
            authToken: userToken,
            user: decodedUser,
          };
        }
        localStorage.setItem("isLoggedIn", JSON.stringify(result.isLoggedIn));
        localStorage.setItem("user", JSON.stringify(result));
        localStorage.setItem("userData", JSON.stringify(decodedUser));
        const authUser = localStorage.getItem("user");
        const user = JSON.parse(authUser);
        dispatch(setUserData(user));
        navigate("/");
      }
    } catch (error) {
      console.log("error while making api call..", error);
      let message = error?.response?.data?.message || "Error while login!!"
      setErrorMsg(message);
      setLoading(false);
      
      return false;    
    }
  };

  const handleValidatePassword = (rule, value) => {
    if (!value) {
      return Promise.reject("Password is required!");
    } else if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters long!");
    } else {
      return Promise.resolve();
    }
  };

  return (
    <LoginStyle>
      <div className="container_wrap">
        {loading && <Spin spinning={loading} fullscreen size="large" />}

        <div className="login_container">
          <div className="container_data">
            <h1 className="login_title">Sign In</h1>
            <div className="login_form">
              <Form
                onFinish={handleSubmit}
                form={form}
                className=""
                autoComplete="off"
                layout="vertical"
                initialValues={{
                  email: "",
                  password: "",
                }}
              >
                <Form.Item
                  label="User ID"
                  className="mt-3 login_form_label"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "User Id is required!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter the user Id"
                    className="login_form_input"
                    maxLength={50}
                  />
                </Form.Item>
                <Form.Item
                  label="Password"
                  className="mt-3 login_form_label"
                  name="password"
                  rules={[
                    {
                      required: true,
                      validator: handleValidatePassword,
                    },
                  ]}
                >
                  <Input
                    type="password"
                    placeholder="Enter the password"
                    className="login_form_input"
                    maxLength={50}
                  />
                </Form.Item>
                {errorMsg && <p className="error_msg text-danger text-left mb-0 ">{errorMsg}</p> }

                <p className="signup_tag">
                  Don't have an account?{" "}
                  <span
                    className="signup_link"
                    onClick={() => navigate("/register")}
                  >
                    Create here.
                  </span>
                </p>

                <div className="text-center">
                  <Button
                    className="form_btn mt-4"
                    type="submit"
                    htmlType="submit"
                  >
                    {loading ? (
                      <Spin spinning={loading} size="small" />
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </LoginStyle>
  );
};
