import React, { useState } from "react";
import UserDetailsStyle from "./style";
import { Form, Button } from "react-bootstrap";
import { DatePicker } from "antd";
import moment from "moment/moment";

const UserDetailsModal = () => {
  let data = localStorage.getItem("userData");
  let user;
  if (data) {
    user = JSON.parse(data);
  }

  const [formInput, setFormInput] = useState();

  const handleChangeInput = (name, val) => {
    setFormInput((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const handleChangeDate = (date) => {
    handleChangeInput("sowing_Date", moment(date.$d).format("YYYY-MM-DD"));
  };

  return (
    <UserDetailsStyle>
      <div className="userDetails_modal_body">
        <p className="my_add_crop_header">View User:</p>
        <div className="selected_mycrop_img">
          
        </div>
      </div>
    </UserDetailsStyle>
  );
};

export default UserDetailsModal;
