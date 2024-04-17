import React, { useState } from "react";
import LoginStyle from "./style";
import { Form, Input, Button, Select, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let baseUrl = "http://127.0.0.1:3000/agri/";

  const handleSubmit = async(e) => {
    console.log("submitted!!", e);
    let obj = {
      "emailId":e.email,
      "password":e.password,
    }
    setLoading(true);
    try {
      let response = await axios.post(`${baseUrl}login`, obj);
      console.log("response==>",response)
      if(response.data.status){
          setLoading(false);
          navigate("/");
      }     
      
    } catch (error) {
      console.log("error while making api call..", error)
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
        {loading && <Spin spinning={loading} fullscreen size="large" /> }
      
          <div className="login_container">
            <div className="container_data">
              <h1 className="login_title">Sign In</h1>
              <div className="login_form">
                <Form
                  onFinish={handleSubmit}
                  form={form}
                  className=""
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
                  <p className="signup_tag">Don't have an account? <span className="signup_link" onClick={()=>navigate('/register')}>Create here.</span></p>

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
