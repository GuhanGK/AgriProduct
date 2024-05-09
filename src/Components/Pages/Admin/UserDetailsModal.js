import React from "react";
import UserDetailsStyle from "./style";

const UserDetailsModal = () => {
    let data = localStorage.getItem('userData');
    let user;
    if(data){
        user = JSON.parse(data);
    }
    
  return (
    <UserDetailsStyle>
      <div className="userDetails_modal_body">
        <p>User Details:</p>
        <div className="selected_mycrop_img">
           
        </div>
      </div>
    </UserDetailsStyle>
  );
};

export default UserDetailsModal;
