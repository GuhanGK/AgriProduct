import React, { useEffect, useState } from "react";
import CropStyle from "./Style";
import { Modal, Row } from "react-bootstrap";
import ProductMenuItems from "../../../ProductMenu";
import { FaPlus } from "react-icons/fa6";
import SelectedCropModal from "./SelectedCrop";
import Rise from "../../../Assets/Images/rice.png"
import SelectedMyCropModal from "./MyCropModal";
import ShowMyCrop from "./ShowMyCrop";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllCropDataData } from "../../../Redux/TrackingRedux";
import ShowAllCrop from "./ShowAllCrops";

const CropManagement = () => {
    const dispatch = useDispatch();
    const [openModal, setOpenModal] = useState(false)
    const [openMyCropModal, setOpenMyModal] = useState(false)
    const [openMyCropItem, setOpenMyCropItem] = useState(false)
    const [openAllCrop, setOpenAllCrop] = useState(false)
    const [selectAllCrop, setSelectAllCrop] = useState()
    const [selectedCrop, setSelectedCrop] = useState("")
    const [sowingInput, setSowingInput] = useState()
    const [mySelectedCrop, setMySelectedCrop] = useState([
        {
            img: Rise,
            title: "Rise"
        }
    ])

    console.log("mySelectedCrop--->", mySelectedCrop)
    console.log("sowingInput--->", sowingInput)
    const handleCloseModal = () => setOpenModal(false)
    const handleCloseMyCropModal = () => setOpenMyModal(false)
    const handleCloseMyCropItem = () => setOpenMyCropItem(false)
    const handleCloseAllCrop = () => setOpenAllCrop(false)

    const allCropDataData = useSelector((state) => state.tracking.getAllCropData)

    useEffect(() => {
        const fetchData = async () => {
            const URL = "http://127.0.0.1:3000/agri/allcrops";
            try{
                const response = await axios.get(URL)
                if(response.status){
                    console.log("response---->", response)
                    dispatch(setAllCropDataData(response.data)) 
                }
            }catch(error){
                console.log("error--->", error)
            }
        }

        fetchData() 
    }, [])

    const handleSelectCropItem = (item) => {
        setSelectedCrop(item)
    }

    const handleOpenSelectCrop = () => {
        setOpenAllCrop(!openAllCrop)
    }

    const handleOpenMySelectCrop = () => {
        setOpenMyModal(!openMyCropModal)
    }

    console.log("allCropDataData--->", allCropDataData)

    return(
        <>
            <CropStyle>
                <Row className="crop_container">
                    <h1 className="content_title">Crop Management</h1>

                    <div className="crop_manage_container">
                        <div className="crop_item_container">
                            <div className="crop_item_section">
                                {ProductMenuItems.map((item, index) => {
                                    return(
                                        <div key={index} className="crop_item_box" onClick={() =>{ setOpenModal(!openModal); handleSelectCropItem(item)}}>
                                            <img src={item.img} alt={item.title} width={50} height={100} />
                                            <p className="crop_item_title">{item.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div className="crop_item_plus_box" onClick={handleOpenSelectCrop}>
                                <FaPlus className="plus_icon"/>
                                <span>{ProductMenuItems.length}</span>
                            </div>
                        </div>
                    </div>

                    <div className="mycrop_manage_container">
                        <h2>My Crops</h2>
                        <div className="mycrop_item_container">
                            <div className="mycrop_item_section">
                                {mySelectedCrop.map((item, index) => {
                                    return(
                                        <div key={index} className="crop_item_box" onClick={() => {setSelectedCrop(item); setOpenMyCropItem(!openMyCropItem)}}>
                                            <img src={item.img} alt={item.title} width={50} height={100} />
                                            <p className="crop_item_title">{item.title}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            
                            <div className="crop_item_plus_box" onClick={handleOpenMySelectCrop}>
                                <FaPlus className="plus_icon"/>
                            </div>
                        </div>
                    </div>
                </Row>
                <br/>
                <Modal 
                    show={openModal} 
                    onHide={handleCloseModal}
                    centered
                    className="selected_crop_modal"
                >
                    <SelectedCropModal 
                        selectedCrop={selectedCrop}
                        setMySelectedCrop={setMySelectedCrop}
                        setSowingInput={setSowingInput}
                        handleCloseModal={handleCloseModal}
                    />
                </Modal>
                <Modal 
                    show={openMyCropItem} 
                    onHide={handleCloseMyCropItem}
                    centered
                    className="selected_crop_modal"
                >
                    <ShowMyCrop 
                        selectedCrop={selectedCrop}
                    />
                </Modal>

                <Modal 
                    show={openMyCropModal} 
                    onHide={handleCloseMyCropModal}
                    centered
                    className="selected_crop_modal"
                >
                    <SelectedMyCropModal 
                        selectedCrop={selectedCrop}
                        setMySelectedCrop={setMySelectedCrop}
                        setSowingInput={setSowingInput}
                        handleCloseModal={handleCloseMyCropModal}
                    />
                </Modal>

                <Modal 
                    show={openAllCrop} 
                    onHide={handleCloseAllCrop}
                    centered
                    className="selected_crop_modal"
                >
                    <ShowAllCrop 
                        setSelectAllCrop={setSelectAllCrop}
                        setSelectedCrop={setSelectedCrop}
                        setOpenModal={setOpenModal}
                        handleCloseModal={handleCloseAllCrop}
                    />
                </Modal>
            </CropStyle>
        </>
    )
} 

export default CropManagement;