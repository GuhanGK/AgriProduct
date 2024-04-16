import React from "react";
import { Container, Row } from "react-bootstrap";
import LoginStyle from "./style";
import { Form, Input, Button, Select, Spin } from "antd";

export const Login = () => {
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    console.log("submitted!!", e);
  };
  
  const handleValidatePassword = (rule, value) => {
    if (!value) {
      return Promise.reject("Password is required!");
    } else if (value.length < 8) {
      return Promise.reject("Password must be at least 8 characters long!");
    } else {
      return Promise.resolve();
    }
  }

  return (
    <LoginStyle>
      <div className="container_wrap">
        <div className="login_container">
          <div className="container_data">
            <h1 className="login_title">Sign In</h1>
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
                      validator: handleValidatePassword
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

                <div className="text-center">
                  <Button
                    className="form_btn mt-4"
                    type="submit"
                    htmlType="submit"
                  >
                    Sign in
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
