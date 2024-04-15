import React from "react";
import { Container, Row } from "react-bootstrap";
import LoginStyle from "./style";
import { Form, Input, Button, Select, Spin } from "antd";

export const Login = () => {
  const [form] = Form.useForm();

  const handleSubmit = (e) => {
    console.log("submitted!!", e);
  };

  return (
    <LoginStyle>
      <div className="container_wrap">
        <div className="login_container">
          <div className="container_data">
            <h1>Login</h1>
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
                  label="Email ID"
                  className="mt-3"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Email ID required!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Email Id" maxLength={50} />
                </Form.Item>
                <Form.Item
                  label="Enter Password"
                  className="mt-3"
                  name="password"
                  rules={[
                    {
                      required: true,
                      type: "password",
                      message: "password required!",
                    },
                  ]}
                >
                  <Input placeholder="Enter password" maxLength={50} />
                </Form.Item>

                <div className="text-center">
                  <Button
                    className="form_btn mt-4"
                    type="primary"
                    htmlType="submit"
                  >
                    Login
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
