import React, { useEffect, useState } from "react";
import CropStyle from "./Style";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllCropDataData } from "../../../Redux/TrackingRedux";

const ShowMyCrop = ({selectedCrop}) => {
    console.log("ShowMyCrop ~ selectedCrop---->", selectedCrop);
    const [loading, setLoading] = useState(false);
    const [cropData, setCropData] = useState({});
    console.log("ShowMyCrop ~ cropData---->", cropData)
    
    const dispatch = useDispatch();


    useEffect(()=>{
        if(selectedCrop){
            const fetchData = async () => {
                setLoading(true);
                const URL = `http://127.0.0.1:3000/agri/allonecrops?cropName=${selectedCrop.title}`;
                try{
                    const response = await axios.get(URL);
    
                    if(response.status){
                        console.log("response all crops---->", response)
                        setCropData(response.data.data);
                        setLoading(false);
    
                    }
                    
                }catch(error){
                    console.log("error--->", error)
                    setLoading(false);
    
                }
            }
    
            fetchData() 
        }
    },[])
    return(
        <CropStyle>
            <div className="show_mycrop_container ">
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
                            {/* <p>Palnted on 2024-05-04</p>
                            <div className="survey_details_sec">
                                <p>Survey Number: 12345</p>
                                <p>Acre: 2</p>
                            </div> */}

                            <h2>Processes</h2>
                            {
                                cropData?.tasks?.map((item, i)=>{
                                    return(
                                        <p key={i}> Step {i+1}: {item}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                
            </div>
        </CropStyle>
    )
}

export default ShowMyCrop;