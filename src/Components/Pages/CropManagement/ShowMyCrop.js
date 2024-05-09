import React, { useState } from "react";
import CropStyle from "./Style";

const ShowMyCrop = ({selectedCrop}) => {
    return(
        <CropStyle>
            <div className="show_mycrop_container">
                <div>
                    <h5 className="show_mycrop_header">Streamline crop management for optimal yield. Maximize efficiency with ease.</h5>
                    <div>
                        <div className="show_mycrop_img">
                            <img
                                src={selectedCrop?.img}
                                width={50}
                                height={100}
                                alt="SelectedCrop"
                            />
                        </div>
            
                        <div className="w-100">
                            <h2 className="crop_item_title">{selectedCrop?.title}</h2>
                            <p>Palnted on 2024-05-04</p>
                            <div className="survey_details_sec">
                                <p>Survey Number: 12345</p>
                                <p>Acre: 2</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </CropStyle>
    )
}

export default ShowMyCrop;