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
    margin: auto;
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
.ant-upload-text{
    color:grey;
}
.dashed_div{
    border: 1px dashed #8c8c8c;
    border-radius: 10px;
}
.image_wrapper{
    display: flex;
    justify-content: space-around;
    align-items:center;
}
.start_test_btn{
    height: 60px;
    width: 200px;
}
.view_image{
    width: 80%;
    margin: auto;
    background: #fff;
    box-shadow: 0px 0px 10px 1px #a2a2a2;    

}
.image_box{
    box-shadow: 0px 0px 10px 1px #a2a2a2;    
    position: relative;
}
.remove_btn{
    position:absolute;
    font-size:18px;
    color: red;
    left:152px;
    top: -14px;
}
.result_heading{
    font-size:35px;
    font-weight:900;
}
.response_container{
    width: 50%;
    margin: auto;
}
.key{
    font-weight:bold;
}
.typewriter-text {
    display: flex;
    justify-content:space-between;
  overflow: hidden; /* Ensures the text is not visible until animated */
  border-right: .15em solid orange; /* The typewriter cursor */
  white-space: nowrap; /* Keeps the text on a single line */
  margin: 0 auto; /* Centers the text horizontally */
  letter-spacing: .15em; /* Adjusts the spacing between characters */
  animation: typing 3.5s steps(40, end); /* The typewriter animation */
}

@keyframes typing {
  from {
    width: 0; /* Starts with no width */
  }
  to {
    width: 100%; /* Ends with full width */
  }
}

`;

export default SoilTestingWrap;
