import React, { useState } from "react";
import LoginStyle from "../Login/style";
import { Form, Input, Button, Select, Spin } from "antd";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    console.log("submitted!!", e);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1500);
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
            <div className="signup_container_data">
              <h1 className="login_title">Sign Up</h1>
              <div className="login_form">
                <Form
                  onFinish={handleSubmit}
                  form={form}
                  className="payment_form"
                  layout="vertical"
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                >
                  <Form.Item
                    label="First Name"
                    className="mt-3 login_form_label"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "First Name is required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter First Name"
                      className="login_form_input"
                      maxLength={50}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Last Name"
                    className="mt-3 login_form_label"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Last Name is required!",
                      },
                    ]}
                  >
                    <Input
                      placeholder="Enter Last Name"
                      className="login_form_input"
                      maxLength={50}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Email ID"
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
                    label="Phone Number"
                    className="mt-3 login_form_label"
                    name="phone"
                    rules={[
                        {
                          required: true,
                          message: "Contact Number is required!",
                        },
                        {
                          pattern: /^[0-9]*$/,
                          message: "Please enter a valid contact number.",
                        },
                      ]}
                  >
                    <Input
                      placeholder="Enter the user Id"
                      className="login_form_input"
                      maxLength={10}
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
                  <p className="signup_tag">Already have an account? <span className="signup_link" onClick={()=>navigate('/login')}>Login here.</span></p>
                  <div className="text-center">
                    <Button
                      className="form_btn mt-4"
                      type="submit"
                      htmlType="submit"
                    >
                      {loading ? (
                        <Spin spinning={loading} size="small" />
                      ) : (
                        "Create"
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
