import Styled from 'styled-components';

const DashboardStyle = Styled.div`
    .hello_world{
        height: 90vh;
    }
    .weather_container{
        width: 80%;
    }
    .dashboard_container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }
    .crop_management_div{
        width: 80%;
        display: flex;
        align-items: stretch;
        justify-content:center;
        background: transparent;
        border-radius:10px;
    }
    .crop_data{
    width: 50%;
    background: #8080808c;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
}
    .crop_image{
        width: 50%;
        /* height: 200px; */
    }
    
    .carousel_box{
        width: 100%;
    }
    .carousel-image {
        width: 100%;
        height: 100%;
        margin: 0 10px;
    }
    .carousel_Img_container{
        width: 80%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 500px;
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
    
`;

export default DashboardStyle;