import Styled from "styled-components";
import loginLogo from "../../../Assets/Images/modern_agriculture_bg.png";

const SoilTestingWrap = Styled.div`
 .dashboard_container{
        width: 80%;
        margin:auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .carousel_text { 
        height: 100%;
        background-color: rgb(0 82 3 / 55%);
        display: flex;
        align-items:center;
        color: white;
        padding: 10px;
        text-align: justify;
    }
        
    .carousel_box{
        width: 100%;
    }
    .carousel-image {
        width: 100%;
        margin: 0 10px;
    }
    .carousel_Img_container{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: auto;
        .carousel-inner {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
    }
    .carousel_Img_item{
        width: 100%;
        height: 100%;
    }
    .carousel_Img{
        width: 100%;
        height: 100%;
    }
    .carousel-indicators{
        bottom: -15px !important;
        gap:5px;
    }
    .carousel-indicators{
        button{
            height: 5px;
            width: 20px;
            background: #0d0d0d59;
            border: none;
            border-radius: 15px; 
        }
        
    }
    .carousel-indicators li {
        background-color: #ccc; /* Inactive indicator color */
    }

.carousel-indicators .active {
    background-color: #02a909;
    border-radius: 5px;
    border: none;
}
.file_upload_container{
    width: 80%;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 1px #a2a2a2;    
    transition: all 0.3s ease; 
}
.file_upload_container:hover{
    border: 1px solid #47c42f;
    box-shadow: 0px 0px 10px 1px #47c42f;
    width:81%;
    position:relative;
    bottom:1px;

}

.heading_soil{
    font-size:35px;
    font-weight:900;
    color: transparent;
    background-image:url(${loginLogo}) ;
    background-clip:text;
    -webkit-background-clip:text;
    background-size:cover;
}

`;

export default SoilTestingWrap;
