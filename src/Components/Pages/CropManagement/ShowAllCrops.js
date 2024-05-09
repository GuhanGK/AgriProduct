import React, { useState } from "react";
import CropStyle from "./Style";
import ProductMenuItems from "../../../ProductMenu";
import { Button } from "react-bootstrap";
import { BsFillPatchCheckFill } from "react-icons/bs";

const ShowAllCrop = ({setOpenModal, handleCloseModal, setSelectedCrop}) => {
    const [getItemIndex, setGetItemIndex] = useState()
    const [getItem, setGetItem] = useState()
    const hanldeClickItem = (index, item) => {
        setGetItemIndex(index)
        setGetItem(item)
    }

    const handleClick = () => {
        setSelectedCrop(getItem)
        setOpenModal(true)
        handleCloseModal()
    }
  return (
    <CropStyle>
      <div className="show_mycrop_container">
        <div>
          {/* <h5 className="show_mycrop_header">Streamline crop management for optimal yield. Maximize efficiency with ease.</h5> */}
          <div className="allcrop_item_section">
            {ProductMenuItems.map((item, index) => {
              return (
                <div className="my_crop_items" key={index}>
                    <div key={index} className="crop_item_box" onClick={() => hanldeClickItem(index, item)}>
                    <img
                        src={item.img}
                        alt={item.title}
                        width={50}
                        height={100}
                    />
                    <p className="crop_item_title">{item.title}</p>
                    {getItemIndex === index && <BsFillPatchCheckFill className="selected_icon"/>}
                    </div>
                </div>
              );
            })}
          </div>
            <br />
          <div className="add_crop_button">
            <Button type="submit" onClick={handleClick}>Select Crop</Button>
          </div>
        </div>
      </div>
    </CropStyle>
  );
};

export default ShowAllCrop;
