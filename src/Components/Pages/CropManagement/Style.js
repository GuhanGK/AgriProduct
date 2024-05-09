import Styled from 'styled-components';

const CropStyle = Styled.div`
    .crop_container{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }    
    .content_title{
        width: 100%;
        text-align: center;
    }
    .crop_manage_container{
        width: 100%;
        border-radius: 8px;
        background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(77,195,30,1) 0%, rgba(66,197,62,1) 13%, rgba(0,212,255,1) 96%);
    }
    .crop_item_container {
        display: flex;
        border-radius: 8px;
        padding: 12px 12px;
    }

    .crop_item_title{
        margin-bottom: 1rem;
    }
    .crop_item_section{
        display: flex;
        width: 100%;
        overflow-x: scroll;
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    
    .crop_item_section::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
    .crop_item_box {
        flex: 0 0 auto; 
        margin-right: 10px;
        width: 135px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }
    .crop_item_plus_box{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        width: 135px;
        height: 135px;
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }

    .plus_icon{
        font-size: 28px;
    }

    .selected_crop_modal_body{
        padding: 12px;
    }

    .selected_crop_img{
        width: max-content;
        text-align: center;
        padding: 12px
        border-radius: 50%;
        background: #fff;
        cursor: pointer;
    }
    .sowing_input_fields{
        display: flex;
        flex-direction: column;
    }

    .add_crop_button{
        width: 100%;
    }
    .add_crop_button Button{
        width: 100%;
        background: green;
        color: white;
        border: none;
    } 

    .mycrop_item_container{
        display: flex;
        border-radius: 8px;
        padding: 12px 12px;
    }
    .mycrop_item_section{
        display: flex;
        width: 100%;
        overflow-x: scroll;
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    .mycrop_item_section::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }

    .selected_mycrop_img{
        display: flex;
        gap: 10px;
        overflow-x: scroll;
        text-overflow: ellipsis; 
        white-space: nowrap;
    }
    .selected_mycrop_img::-webkit-scrollbar {
        width: 0px;
        background: transparent; /* make scrollbar transparent */
    }
    .my_crop_items{
        position: relative;
        cursor: pointer;
    }
    .selected_icon{
        position: absolute;
        font-size: 14px;
        top: -2px;
        color: #d40c7e;
    }
    .show_mycrop_container{
        display: flex;
        // justify-content: center;
        align-items: center;
        gap: 12px;
        padding: 12px;
    }
    .show_mycrop_img{
        width: 100px;
        height: 100px;
        display: flex;
        // flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #d2f8d2;
        padding: 8px;
        border-radius: 50%;
        box-shadow: 0px 3px 6px #00000029;
    }

    .survey_details_sec{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .show_mycrop_header{
        text-align: center;
    }
`;

export default CropStyle;